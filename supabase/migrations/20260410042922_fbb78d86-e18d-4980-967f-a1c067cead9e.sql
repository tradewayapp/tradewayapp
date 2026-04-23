
-- Fix search_path on calculate_daily_referral_commissions
CREATE OR REPLACE FUNCTION public.calculate_daily_referral_commissions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE wallets
  SET referral_earnings_usd = referral_earnings_usd + ((w.capital_usd * 0.01) / 30)
  FROM network_tree nt, wallets w
  WHERE nt.referee_id = w.user_id AND nt.level = 'A' AND wallets.user_id = nt.referrer_id;

  UPDATE wallets
  SET referral_earnings_usd = referral_earnings_usd + ((w.capital_usd * 0.005) / 30)
  FROM network_tree nt, wallets w
  WHERE nt.referee_id = w.user_id AND nt.level = 'B' AND wallets.user_id = nt.referrer_id;

  UPDATE wallets
  SET referral_earnings_usd = referral_earnings_usd + ((w.capital_usd * 0.0025) / 30)
  FROM network_tree nt, wallets w
  WHERE nt.referee_id = w.user_id AND nt.level = 'C' AND wallets.user_id = nt.referrer_id;
END;
$$;

-- Tighten network_tree insert policy
DROP POLICY IF EXISTS "System can insert network entries" ON public.network_tree;
CREATE POLICY "Users can insert own referral entries" ON public.network_tree FOR INSERT TO authenticated
WITH CHECK (auth.uid() = referee_id);
