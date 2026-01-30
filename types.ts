export interface Ticket {
  id: string;
  name: string;
  description: string;
  images: string[];
  category: 'adventure' | 'family' | 'romantic' | 'nature' | 'tour';
  features: string[];
}

export interface NavLink {
  label: string;
  path: string;
}