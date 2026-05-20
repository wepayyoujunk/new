-- Contractor application fields: vehicle/trailer setup + insurance check.
-- Added when the W-2 crew model was replaced with 1099 owner-operator contractors
-- who must own at least a trailer.

alter table public.leads
  add column if not exists vehicle text,
  add column if not exists has_insurance text;
