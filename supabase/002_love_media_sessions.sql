-- Execute no SQL Editor do Supabase antes de habilitar uploads.
-- Reservas atômicas impedem exceder 12 arquivos/120 MiB por sessão.
create table if not exists public.love_upload_sessions (
  id uuid primary key default gen_random_uuid(),
  token_hash text not null unique,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '2 hours',
  files_reserved integer not null default 0 check (files_reserved between 0 and 12),
  bytes_reserved bigint not null default 0 check (bytes_reserved between 0 and 125829120)
);
alter table public.love_upload_sessions enable row level security;
revoke all on public.love_upload_sessions from anon, authenticated;
create or replace function public.reserve_love_upload(p_token_hash text, p_bytes bigint)
returns uuid language plpgsql security definer set search_path = public
as $$
declare v_id uuid;
begin
 if p_bytes <= 0 or p_bytes > 10485760 then raise exception 'Tamanho inválido'; end if;
 update public.love_upload_sessions
 set files_reserved = files_reserved + 1, bytes_reserved = bytes_reserved + p_bytes
 where token_hash = p_token_hash and expires_at > now()
   and files_reserved < 12 and bytes_reserved + p_bytes <= 125829120
 returning id into v_id;
 if v_id is null then raise exception 'Sessão expirada ou limite atingido'; end if;
 return v_id;
end;
$$;
revoke all on function public.reserve_love_upload(text,bigint) from public, anon, authenticated;
grant execute on function public.reserve_love_upload(text,bigint) to service_role;
-- Operação de limpeza futura: excluir arquivos abandonados e sessões expiradas.
