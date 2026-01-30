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
    name: 'Skyglass Canela',
    description: 'A primeira plataforma de aço e vidro da América Latina. Caminhe sobre o vale a 360 metros de altura ou ande no brinquedo Abusado para uma dose extra de adrenalina.',
    images: [
      'https://i.postimg.cc/YSQwbhqB/fotos-site-Parque-skayglass.jpg',
      'https://i.postimg.cc/PqWB192D/foto-2-Parque-skayglass.webp',
      'https://i.postimg.cc/brBMzhNH/foto-3-Parque-skayglass.webp',
      'https://i.postimg.cc/25DtjTrz/foto-4-Parque-skayglass.webp'
    ],
    category: 'adventure',
    features: ['Plataforma de Vidro', 'Abusado', 'Vista do Vale', 'Museu do Ferro']
  },
  {
    id: '2',
    name: 'Mini Mundo',
    description: 'Um mundo de sonhos em miniatura. Réplicas fiéis de castelos, estações ferroviárias e marcos arquitetônicos mundiais, 24 vezes menores que o original, habitados por milhares de mini-habitantes.',
    images: [
      'https://i.postimg.cc/GtH7g5Jc/fotos-site-Parque-mini-mundo.jpg',
      'https://i.postimg.cc/HnRSq96d/foto-2-Parque-mini-mundo.jpg',
      'https://i.postimg.cc/SNY1WHxB/foto-3-Parque-mini-mundo.jpg',
      'https://i.postimg.cc/T387QQyL/foto-4-Parque-mini-mundo.webp'
    ],
    category: 'family',
    features: ['Réplicas Perfeitas', 'Ao Ar Livre', 'Cenários Fotográficos', 'Personagens Próprios']
  },
  {
    id: '3',
    name: 'Museu de Cera',
    description: 'Fique cara a cara com seus ídolos! O Dreamland Museu de Cera traz réplicas perfeitas de celebridades, heróis e ícones mundiais em cenários imersivos para fotos incríveis.',
    images: [
      'https://i.postimg.cc/63QYTmPm/foto-1-Parque-Museu-de-Cera.jpg',
      'https://i.postimg.cc/0jTfW2yB/foto-2-Parque-Museu-de-Cera.jpg',
      'https://i.postimg.cc/xjXV4xd5/foto-3-Parque-Museu-de-Cera.jpg'
    ],
    category: 'family',
    features: ['Celebridades', 'Cenários Temáticos', 'Fotos Divertidas', 'Dreamland']
  },
  {
    id: '4',
    name: 'Maria Fumaça',
    description: 'Uma viagem no tempo pela cultura italiana. O passeio de trem a vapor percorre Bento Gonçalves, Garibaldi e Carlos Barbosa com música, teatro e degustação de vinhos e sucos.',
    images: [
      'https://i.postimg.cc/W16Bkx93/fotos-site-Parque-maria-fumaca.jpg',
      'https://i.postimg.cc/d05gWrPz/foto-2-Parque-maria-fumaca.jpg',
      'https://i.postimg.cc/cH62PCdR/foto-3-Parque-maria-fumaca.webp'
    ],
    category: 'tour',
    features: ['Trem a Vapor', 'Degustação', 'Show Típico', 'Cultura Italiana']
  },
  {
    id: '5',
    name: 'Bondinhos Aéreos',
    description: 'A melhor vista da Cascata do Caracol. Desfrute da natureza exuberante da serra em um passeio tranquilo e seguro com mirantes privilegiados.',
    images: [
      'https://i.postimg.cc/9fQnq0Rk/foto-2-Parque-Bondinhos-Aereos.jpg',
      'https://i.postimg.cc/26q92txd/foto-3-Parque-Bondinhos-Aereos.webp',
      'https://i.postimg.cc/05wHSLjv/foto-4-Parque-Bondinhos-Aereos.jpg'
    ],
    category: 'nature',
    features: ['Cascata do Caracol', 'Natureza', 'Mirantes', 'Eagle']
  },
  {
    id: '6',
    name: 'Vila da Mônica Gramado',
    description: 'Um parque onde a Turma da Mônica ganha vida! Atrações divertidas para toda a família, encontros com personagens e cenários do Bairro do Limoeiro em um ambiente coberto e climatizado.',
    images: [
      'https://i.postimg.cc/SNXQcQ8Q/foto-site-parque-da-monica.jpg',
      'https://i.postimg.cc/MZfKQK1f/foto-site-parque-da-monica-4.jpg',
      'https://i.postimg.cc/k5y772rT/foto-site-parque-da-monica-3.jpg'
    ],
    category: 'family',
    features: ['Turma da Mônica', 'Parque Coberto', 'Atrações Infantis', 'Shows']
  }
];

export const HERO_CONTENT = {
  title: "A Magia da Serra Gaúcha Começa Aqui",
  subtitle: "Sua parceira oficial Parksnet para os melhores ingressos e experiências na Serra Gaúcha.",
  cta: "Ver Ingressos"
};