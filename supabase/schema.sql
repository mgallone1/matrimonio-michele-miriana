-- Supabase SQL Schema per Partecipazione Matrimonio Michele & Miriana
-- Data Nozze: 2 Luglio 2027 • Tana di Volpe, Albanella (SA)

create table if not exists public.rsvp_submissions (
  id text primary key,
  full_name text not null,
  email text,
  phone text,
  attendance text not null check (attendance in ('attending', 'declined')),
  adults_count integer not null default 1,
  children_count integer not null default 0,
  dietary_notes text,
  dietary_tags text[] default '{}',
  song_suggestion text,
  wishes_message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Abilita Row Level Security
alter table public.rsvp_submissions enable row level security;

-- Policy per consentire l'invio delle conferme da parte degli invitati (Insert pubblico)
create policy "Consenti inserimento RSVP pubblico"
  on public.rsvp_submissions
  for insert
  with check (true);

-- Policy di lettura (anonima per la dashboard protetta da password o autenticata)
create policy "Consenti lettura RSVP per visualizzazione dashboard"
  on public.rsvp_submissions
  for select
  using (true);

-- Indici per performance
create index if not exists idx_rsvp_created_at on public.rsvp_submissions (created_at desc);
create index if not exists idx_rsvp_attendance on public.rsvp_submissions (attendance);
