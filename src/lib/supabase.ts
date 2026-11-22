import { createClient } from '@supabase/supabase-js';
import { RsvpSubmission } from '../types/wedding';

// Check for environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const LOCAL_STORAGE_KEY = 'michele_miriana_rsvp_submissions_v1';

export async function saveRsvp(submission: RsvpSubmission): Promise<{ success: boolean; error?: string }> {
  const submissionWithId: RsvpSubmission = {
    ...submission,
    id: submission.id || `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: submission.createdAt || new Date().toISOString()
  };

  // Always save locally as immediate safety backup
  try {
    const existing = getLocalRsvps();
    existing.unshift(submissionWithId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('Local storage backup error:', err);
  }

  // If Supabase is connected, persist to remote database
  if (supabase) {
    try {
      const { error } = await supabase.from('rsvp_submissions').insert([
        {
          id: submissionWithId.id,
          full_name: submissionWithId.fullName,
          email: submissionWithId.email || null,
          phone: submissionWithId.phone || null,
          attendance: submissionWithId.attendance,
          adults_count: submissionWithId.adultsCount,
          children_count: submissionWithId.childrenCount,
          dietary_notes: submissionWithId.dietaryNotes,
          dietary_tags: submissionWithId.dietaryTags,
          song_suggestion: submissionWithId.songSuggestion || null,
          wishes_message: submissionWithId.wishesMessage || null,
          companions: submissionWithId.companions || null,
          need_transfer: submissionWithId.needTransfer || false,
          created_at: submissionWithId.createdAt
        }
      ]);

      if (error) {
        console.error('Supabase insert error, saved locally:', error);
        return { success: true, error: 'Saved locally (database sync pending)' };
      }
      return { success: true };
    } catch (dbErr) {
      console.warn('Network error during Supabase sync, saved locally:', dbErr);
      return { success: true, error: 'Saved locally' };
    }
  }

  return { success: true };
}

export async function getAllRsvps(): Promise<RsvpSubmission[]> {
  // If Supabase is configured, fetch live records
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('rsvp_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data.map((item) => ({
          id: item.id,
          fullName: item.full_name,
          email: item.email,
          phone: item.phone,
          attendance: item.attendance,
          adultsCount: item.adults_count,
          childrenCount: item.children_count,
          dietaryNotes: item.dietary_notes,
          dietaryTags: item.dietary_tags || [],
          songSuggestion: item.song_suggestion,
          wishesMessage: item.wishes_message,
          createdAt: item.created_at
        }));
      }
    } catch (err) {
      console.warn('Error reading from Supabase, falling back to local:', err);
    }
  }

  return getLocalRsvps();
}

export function getLocalRsvps(): RsvpSubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
