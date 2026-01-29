import { Ticket } from './types';

export const COMPANY_INFO = {
  name: "AquiTchê Turismo",
  whatsapp: "5554996413434", // (54) 99641-3434 formatted for API
  whatsappDisplay: "(54) 99641-3434",
  instagramUrl: "https://www.instagram.com/aquitcheturismo/",
  email: "contato@aquitche.site",
};

export const PARKS_DATA: Ticket[] = [
  {
    id: '1',
    name: 'Snowland',
    description: 'O único parque de neve de verdade no Brasil. Viva a magia da neve o ano inteiro com patinação, esqui e muita diversão para toda a família.',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'family',
    features: ['Neve de Verdade', 'Patinação', 'Esqui', 'Praça de Alimentação']
  },
  {
    id: '2',
    name: 'Acquamotion',
    description: 'Parque aquático coberto e temático com águas termais. Relaxe e se divirta nas piscinas aquecidas independentemente do clima lá fora.',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'family',
    features: ['Águas Termais', 'Piscinas Cobertas', 'Toboáguas', 'Gastronomia']
  },
  {
    id: '3',
    name: 'Mini Mundo',
    description: 'Um parque ao ar livre com réplicas fiéis de prédios de várias partes do mundo, ricas em detalhes e história, 24 vezes menores que o original.',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'family',
    features: ['Miniaturas', 'História', 'Ao Ar Livre', 'Cenários Fotográficos']
  },
  {
    id: '4',
    name: 'Skyglass Canela',
    description: 'A primeira plataforma de aço e vidro da América Latina. Caminhe sobre o vale a 360 metros de altura ou ande no brinquedo Abusado.',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'adventure',
    features: ['Vista Panorâmica', 'Plataforma de Vidro', 'Abusado', 'Natureza']
  },
  {
    id: '5',
    name: 'Vila da Mônica',
    description: 'Encontre a turminha mais amada do Brasil em um parque temático incrível, cheio de atrações interativas para as crianças.',
    image: 'https://picsum.photos/800/600?random=5',
    category: 'family',
    features: ['Personagens', 'Atrações Infantis', 'Shows', 'Temático']
  },
  {
    id: '6',
    name: 'NBA Park',
    description: 'O primeiro espaço temático da NBA no mundo. Imersão total no basquete com jogos, museu, restaurante e loja oficial.',
    image: 'https://picsum.photos/800/600?random=6',
    category: 'adventure',
    features: ['Basquete', 'Jogos Interativos', 'Museu', 'Restaurante Oficial']
  }
];

export const HERO_CONTENT = {
  title: "A Magia da Serra Gaúcha Começa Aqui",
  subtitle: "Sua parceira oficial Parksnet para os melhores ingressos e experiências em Gramado e Canela.",
  cta: "Ver Ingressos"
};