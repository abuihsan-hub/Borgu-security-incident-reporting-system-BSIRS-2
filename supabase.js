// ===============================
// BSIRS SUPABASE CONNECTION
// ===============================

const SUPABASE_URL = "https://tjvqasojbjpddhptxgtx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ykDbzp6fQmdWEy_penkpnw_E9Hrf6K_";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);