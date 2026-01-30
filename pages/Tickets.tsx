import React, { useState } from 'react';
import { Check, AlertCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { PARKS_DATA, COMPANY_INFO } from '../constants';
import { Ticket } from '../types';

// Componente separado para o Card com Slider
const ParkCard: React.FC<{ park: Ticket }> = ({ park }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % park.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? park.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      {/* Image Carousel - Height adapts to image (h-auto) */}
      <div className="relative w-full overflow-hidden bg-gray-50">
        <img 
          src={park.images[currentImageIndex]} 
          alt={`${park.name} - Foto ${currentImageIndex + 1}`} 
          className="w-full h-auto object-cover transition-opacity duration-500 block" 
        />
        
        {/* Carousel Controls */}
        {park.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {park.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors shadow-sm ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10 shadow-sm">
          {park.category === 'family' ? 'Família' : park.category === 'adventure' ? 'Aventura' : park.category === 'nature' ? 'Natureza' : 'Passeio'}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{park.name}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
          {park.description}
        </p>
        
        <div className="mb-6 space-y-2">
          {park.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-500">
              <Check size={16} className="text-green-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <a 
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, gostaria de comprar ingressos para o *${park.name}*!`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-brand-red text-white font-bold py-3 px-4 rounded-xl hover:bg-red-800 transition-colors shadow-md active:scale-95 transform duration-150 mt-auto"
        >
          Comprar Agora
        </a>
      </div>
    </div>
  );
};

const Tickets: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ingressos para Parques</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Explore as melhores atrações da Serra Gaúcha. Navegue pelas fotos, escolha sua aventura e garanta sua diversão com a segurança da AquiTchê Turismo.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARKS_DATA.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      </div>

      {/* Mandatory Warning Section */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0">
             <AlertCircle size={48} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Não encontrou o parque que procurava?</h3>
            <p className="text-gray-700 text-lg mb-6">
              Não se preocupe! Nós temos parceria com <strong>todos os parques da Serra Gaúcha</strong> (como Snowland, Acquamotion, Vila da Mônica, NBA Park, entre outros). 
              Se a atração que você deseja não está listada acima, entre em contato conosco agora mesmo.
            </p>
            <a 
               href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, estou procurando um parque que não achei no site, pode me ajudar?`}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
            >
              <MessageCircle className="mr-2" size={20} />
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tickets;