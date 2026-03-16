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
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-white/50 group">
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
          className="w-full block text-center bg-brand-green text-white font-extrabold py-4 px-4 rounded-xl hover:bg-green-600 transition-all shadow-[0_4px_14px_0_rgba(0,208,132,0.39)] hover:shadow-[0_6px_20px_rgba(0,208,132,0.23)] hover:-translate-y-1 active:scale-95 transform duration-200 mt-auto uppercase tracking-wider text-sm"
        >
          Comprar Agora
        </a>
      </div>
    </div>
  );
};

const Tickets: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent pt-10 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-brand-red to-brand-wine p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=30')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-md border border-white/30">
              Aventuras Inesquecíveis
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
              Ingressos para <span className="text-brand-gold">Parques</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Explore as melhores atrações da Serra Gaúcha. Navegue pelas fotos, escolha sua aventura e garanta sua diversão com a segurança da AquiTchê Turismo.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARKS_DATA.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      </div>

      {/* Mandatory Warning Section - Dopamine Boosted */}
      <div className="max-w-5xl mx-auto px-4 mt-24">
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=40')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="flex-shrink-0 relative z-10 bg-white/20 p-6 rounded-full backdrop-blur-md border border-white/30 animate-pulse">
             <AlertCircle size={64} className="text-white" />
          </div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-md">Não encontrou o parque que procurava?</h3>
            <p className="text-white/90 text-xl mb-8 font-medium leading-relaxed">
              Temos parceria com <strong className="text-brand-gold text-2xl">TODOS</strong> os parques da Serra Gaúcha (Snowland, Acquamotion, Vila da Mônica, NBA Park e muito mais!). 
              Se a atração que você deseja não está listada, fale conosco agora!
            </p>
            <a 
               href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, estou procurando um parque que não achei no site, pode me ajudar?`}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-8 py-4 text-lg font-extrabold rounded-full text-brand-blue bg-white hover:bg-brand-gold hover:text-brand-dark shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,184,0,0.6)] transition-all transform hover:scale-105"
            >
              <MessageCircle className="mr-3" size={24} />
              Falar com Consultor Agora
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tickets;