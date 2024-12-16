import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '@/lib/config/env';
import type { Database } from './types';

// Create Supabase client with environment variables
export const supabase = createClient<Database>(
  supabaseConfig.url,
  supabaseConfig.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

// Export helper functions for common operations
export const auth = supabase.auth;
export const storage = supabase.storage;
export const from = supabase.from;