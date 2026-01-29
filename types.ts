export interface Ticket {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'adventure' | 'family' | 'romantic' | 'nature';
  features: string[];
}

export interface NavLink {
  label: string;
  path: string;
}