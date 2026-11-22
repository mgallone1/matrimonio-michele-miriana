export interface Companion {
  id: string;
  fullName: string;
  isChild?: boolean;
  dietaryTags?: string[];
  dietaryNotes?: string;
}

export interface RsvpSubmission {
  id?: string;
  fullName: string;
  email?: string;
  phone?: string;
  attendance: 'attending' | 'declined';
  adultsCount: number;
  childrenCount: number;
  companions?: Companion[];
  dietaryNotes: string;
  dietaryTags: string[];
  songSuggestion?: string;
  wishesMessage?: string;
  needTransfer?: boolean;
  createdAt: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  location: string;
  iconName: 'glass' | 'rings' | 'sun' | 'utensils' | 'music' | 'sparkles';
}

export interface AccommodationOption {
  name: string;
  type: string;
  distance: string;
  phone?: string;
  bookingTip?: string;
}
