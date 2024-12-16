import { z } from 'zod';

// Environment schema with fallback values for development
const envSchema = z.object({
  supabase: z.object({
    url: z.string().url().default('http://localhost:54321'),
    anonKey: z.string().min(1).default('your-anon-key'),
  }),
  app: z.object({
    url: z.string().url().default('http://localhost:3000'),
    env: z.enum(['development', 'production', 'test']).default('development'),
  }),
});

// Safely parse environment variables with fallbacks
export const env = envSchema.parse({
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL,
    env: process.env.NODE_ENV,
  },
});

// Export individual configs for better organization
export const supabaseConfig = {
  url: env.supabase.url,
  anonKey: env.supabase.anonKey,
};

export const appConfig = {
  url: env.app.url,
  env: env.app.env,
  isDev: env.app.env === 'development',
  isProd: env.app.env === 'production',
  isTest: env.app.env === 'test',
};