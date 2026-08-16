create extension if not exists pgcrypto;

-- Shopping list items
create table shopping_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  quantity text not null default '1',
  category text not null,
  completed boolean not null default false,
  created_at timestamptz not null default now()
);

alter table shopping_items enable row level security;

create policy "Users select own shopping items" on shopping_items
  for select using (auth.uid() = user_id);
create policy "Users insert own shopping items" on shopping_items
  for insert with check (auth.uid() = user_id);
create policy "Users update own shopping items" on shopping_items
  for update using (auth.uid() = user_id);
create policy "Users delete own shopping items" on shopping_items
  for delete using (auth.uid() = user_id);

-- Price history (used in Phase 4)
create table price_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_name text not null,
  store text not null,
  price numeric(10,2) not null,
  price_type text not null check (price_type in ('regular', 'sale')),
  recorded_date date not null default current_date,
  created_at timestamptz not null default now()
);

alter table price_history enable row level security;

create policy "Users select own price history" on price_history
  for select using (auth.uid() = user_id);
create policy "Users insert own price history" on price_history
  for insert with check (auth.uid() = user_id);
create policy "Users delete own price history" on price_history
  for delete using (auth.uid() = user_id);

-- Recurring items (used in Phase 5)
create table recurring_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  category text not null,
  default_quantity text not null default '1',
  created_at timestamptz not null default now()
);

alter table recurring_items enable row level security;

create policy "Users select own recurring items" on recurring_items
  for select using (auth.uid() = user_id);
create policy "Users insert own recurring items" on recurring_items
  for insert with check (auth.uid() = user_id);
create policy "Users update own recurring items" on recurring_items
  for update using (auth.uid() = user_id);
create policy "Users delete own recurring items" on recurring_items
  for delete using (auth.uid() = user_id);