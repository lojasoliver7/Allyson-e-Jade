-- Execute no SQL Editor do Supabase após revisar tabelas existentes.
create extension if not exists pgcrypto;
create table if not exists public.love_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  plan text not null check (plan in ('24h','1ano','definitivo')),
  config jsonb not null,
  status text not null default 'draft' check (status in ('draft','published','expired','suspended')),
  published_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  check (status <> 'published' or published_at is not null),
  check (status <> 'published' or plan = 'definitivo' or expires_at is not null)
);
create table if not exists public.love_orders (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.love_pages(id),
  plan text not null check (plan in ('24h','1ano','definitivo')),
  amount_cents integer not null check (amount_cents > 0),
  status text not null default 'pending' check (status in ('pending','paid','cancelled','refunded')),
  provider text not null default 'pagbank' check (provider = 'pagbank'),
  provider_order_id text unique,
  provider_charge_id text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists love_pages_active_idx on public.love_pages(status,expires_at);
create index if not exists love_orders_page_idx on public.love_orders(page_id);
alter table public.love_pages enable row level security;
alter table public.love_orders enable row level security;
-- Nenhuma política de leitura pública: páginas só devem ser servidas
-- pelo backend após verificar status e validade.
revoke all on public.love_pages from anon, authenticated;
revoke all on public.love_orders from anon, authenticated;
-- A publicação é transacional e idempotente. Chamar SOMENTE no backend
-- depois de validar o status da cobrança consultando o PagBank.
create or replace function public.publish_paid_love_order(p_order_id uuid)
returns void language plpgsql security definer set search_path = public
as $$
declare o public.love_orders%rowtype;
begin
  select * into o from public.love_orders where id = p_order_id for update;
  if not found then raise exception 'Pedido não encontrado'; end if;
  if o.status = 'paid' then return; end if;
  if o.status <> 'pending' then raise exception 'Pedido não está pendente'; end if;
  if o.provider_order_id is null then raise exception 'Pagamento não associado'; end if;
  update public.love_orders set status = 'paid', paid_at = now() where id = p_order_id;
  update public.love_pages
  set status = 'published', published_at = now(),
      expires_at = case o.plan
        when '24h' then now() + interval '24 hours'
        when '1ano' then now() + interval '365 days'
        else null end,
      plan = o.plan
  where id = o.page_id;
end;
$$;
revoke all on function public.publish_paid_love_order(uuid) from public, anon, authenticated;
grant execute on function public.publish_paid_love_order(uuid) to service_role;
