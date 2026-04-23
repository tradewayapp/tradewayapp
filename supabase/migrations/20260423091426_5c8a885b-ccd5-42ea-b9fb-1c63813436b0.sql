drop policy if exists "Public can download tradeway apk" on storage.objects;

create policy "Public can read app releases"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'app-releases');