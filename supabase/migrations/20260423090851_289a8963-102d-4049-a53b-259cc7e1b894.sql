insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'app-releases',
  'app-releases',
  true,
  524288000,
  array['application/vnd.android.package-archive', 'application/octet-stream']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

create policy "Public can read app releases"
on storage.objects for select
using (bucket_id = 'app-releases');

create policy "Authenticated can upload app releases"
on storage.objects for insert
to authenticated
with check (bucket_id = 'app-releases');

create policy "Authenticated can update app releases"
on storage.objects for update
to authenticated
using (bucket_id = 'app-releases');

create policy "Authenticated can delete app releases"
on storage.objects for delete
to authenticated
using (bucket_id = 'app-releases');