const SUPABASE_URL = "https://tjvqasojbjpddhptxgtx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SB_PUBLISHABLE_KEY";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);