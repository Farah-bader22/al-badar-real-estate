import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxfhpzmrtowfezsnvepm.supabase.co'
const supabaseKey = 'sb_publishable_Qmf_N2YO2lv3L1cByjuLDg_Hn5ZvyjU'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})