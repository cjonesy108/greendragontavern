-- Green Dragon Tavern — Supabase Schema
-- Run this in the Supabase SQL editor

create extension if not exists "uuid-ossp";

-- Featured / invited annotators
create table if not exists annotators (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  title text,
  bio text,
  is_featured boolean default false,
  invite_token text unique,
  created_at timestamptz default now()
);

-- Annotations
create table if not exists annotations (
  id uuid default uuid_generate_v4() primary key,
  passage_id text not null,
  document_id text not null,
  annotator_name text not null,
  annotator_slug text references annotators(slug) on delete set null,
  frame text not null check (frame in ('historical', 'legal', 'contemporary', 'personal', 'contest')),
  body text not null,
  vote_count int default 0,
  created_at timestamptz default now()
);

create index if not exists annotations_passage_idx on annotations(passage_id);
create index if not exists annotations_document_idx on annotations(document_id);
create index if not exists annotations_annotator_idx on annotations(annotator_slug);

-- Votes (one per session per annotation)
create table if not exists votes (
  id uuid default uuid_generate_v4() primary key,
  annotation_id uuid not null references annotations(id) on delete cascade,
  session_id text not null,
  created_at timestamptz default now(),
  unique(annotation_id, session_id)
);

-- RLS
alter table annotators enable row level security;
alter table annotations enable row level security;
alter table votes enable row level security;

create policy "Public read annotators" on annotators for select using (true);
create policy "Public read annotations" on annotations for select using (true);
create policy "Public read votes" on votes for select using (true);
create policy "Public insert annotations" on annotations for insert with check (true);
create policy "Public insert votes" on votes for insert with check (true);
create policy "Public delete votes" on votes for delete using (true);

-- Trigger: keep vote_count in sync
create or replace function update_vote_count()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' then
    update annotations set vote_count = vote_count + 1 where id = new.annotation_id;
  elsif tg_op = 'DELETE' then
    update annotations set vote_count = vote_count - 1 where id = old.annotation_id;
  end if;
  return null;
end;
$$;

drop trigger if exists vote_count_trigger on votes;
create trigger vote_count_trigger
  after insert or delete on votes
  for each row execute function update_vote_count();

-- Seed a few featured annotators (update names/slugs as needed)
insert into annotators (name, slug, title, bio, is_featured, invite_token) values
  ('Jon Meacham', 'jon-meacham', 'Presidential historian, Pulitzer Prize winner', 'Jon Meacham is an American presidential historian and Pulitzer Prize-winning author.', true, uuid_generate_v4()::text),
  ('Annette Gordon-Reed', 'annette-gordon-reed', 'Historian, Harvard Law Professor', 'Annette Gordon-Reed is a historian and legal scholar known for her work on Thomas Jefferson.', true, uuid_generate_v4()::text)
on conflict (slug) do nothing;
