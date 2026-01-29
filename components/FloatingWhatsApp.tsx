import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, vim pelo site da AquiTchê e gostaria de saber mais sobre os ingressos!`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} color="white" fill="white" />
    </a>
  );
};

export default FloatingWhatsApp;