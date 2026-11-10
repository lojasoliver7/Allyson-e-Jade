-- Associa sessão de upload a um único pedido e impede reutilização.
alter table public.love_upload_sessions
 add column if not exists order_id uuid unique references public.love_orders(id);
create index if not exists love_upload_sessions_order_idx on public.love_upload_sessions(order_id);
create or replace function public.claim_love_upload_session(p_token_hash text, p_order_id uuid)
returns uuid language plpgsql security definer set search_path=public
as $$
declare v_id uuid;
begin
 update public.love_upload_sessions set order_id=p_order_id
 where token_hash=p_token_hash and expires_at>now() and order_id is null
 returning id into v_id;
 if v_id is null then raise exception 'Sessão indisponível'; end if;
 return v_id;
end;
$$;
revoke all on function public.claim_love_upload_session(text,uuid) from public,anon,authenticated;
grant execute on function public.claim_love_upload_session(text,uuid) to service_role;
