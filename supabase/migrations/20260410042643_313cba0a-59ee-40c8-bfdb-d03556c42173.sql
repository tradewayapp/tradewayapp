
-- Storage bucket for KYC documents
INSERT INTO storage.buckets (id, name, public) VALUES ('kyc-documents', 'kyc-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Users can upload own KYC docs" ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'kyc-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view own KYC docs" ON storage.objects FOR SELECT
USING (bucket_id = 'kyc-documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Fix handle_new_user to create both profile and wallet
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  ref_code TEXT;
BEGIN
  -- Generate unique referral code
  ref_code := upper(substr(md5(random()::text), 1, 8));
  
  INSERT INTO public.profiles (id, my_referral_code)
  VALUES (new.id, ref_code)
  ON CONFLICT (id) DO NOTHING;
  
  INSERT INTO public.wallets (user_id)
  VALUES (new.id)
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN new;
END;
$$;

-- Create trigger on auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS: profiles
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Security definer for admin check
CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE((SELECT is_admin FROM public.profiles WHERE id = _user_id), false);
$$;

CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT USING (public.is_admin(auth.uid()));

-- RLS: wallets
CREATE POLICY "Users can view own wallet" ON public.wallets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own wallet" ON public.wallets FOR UPDATE USING (auth.uid() = user_id);

-- RLS: trades (shared log - all authenticated can read)
CREATE POLICY "Authenticated users can view trades" ON public.trades FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can insert trades" ON public.trades FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()));

-- RLS: transactions
CREATE POLICY "Users can view own transactions" ON public.transactions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own transactions" ON public.transactions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all transactions" ON public.transactions FOR SELECT USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update transactions" ON public.transactions FOR UPDATE USING (public.is_admin(auth.uid()));

-- RLS: kyc_records
CREATE POLICY "Users can view own KYC" ON public.kyc_records FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own KYC" ON public.kyc_records FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all KYC" ON public.kyc_records FOR SELECT USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update KYC" ON public.kyc_records FOR UPDATE USING (public.is_admin(auth.uid()));

-- RLS: network_tree
CREATE POLICY "Users can view own network" ON public.network_tree FOR SELECT USING (auth.uid() = referrer_id OR auth.uid() = referee_id);
CREATE POLICY "System can insert network entries" ON public.network_tree FOR INSERT TO authenticated WITH CHECK (true);
