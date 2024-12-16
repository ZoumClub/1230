import { supabase } from './client';
import { FetchError } from '@/lib/api/types';

export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new FetchError(
        error.message,
        error.name,
        error.message,
        'Please check your credentials and try again'
      );
    }

    return { user: data.user, error: null };
  } catch (error) {
    console.error('Sign in error:', error);
    
    if (error instanceof FetchError) {
      return { user: null, error };
    }

    return { 
      user: null, 
      error: new FetchError(
        'Failed to sign in',
        'AUTH_ERROR',
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
    };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Sign out error:', error);
    throw new FetchError(
      'Failed to sign out',
      'AUTH_ERROR',
      error instanceof Error ? error.message : 'An unexpected error occurred'
    );
  }
}

export async function getCurrentUser() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) throw error;
    return session?.user || null;
  } catch (error) {
    console.error('Get current user error:', error);
    throw new FetchError(
      'Failed to get current user',
      'AUTH_ERROR',
      error instanceof Error ? error.message : 'An unexpected error occurred'
    );
  }
}