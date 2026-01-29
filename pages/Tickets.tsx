import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { PARKS_DATA, COMPANY_INFO } from '../constants';

const Tickets: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ingressos para Parques</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Explore as melhores atrações de Gramado e Canela. Escolha sua aventura e garanta sua diversão com a segurança da AquiTchê Turismo.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARKS_DATA.map((park) => (
            <div key={park.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={park.image} 
                  alt={park.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {park.category === 'family' ? 'Família' : 'Aventura'}
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
                  className="w-full block text-center bg-brand-red text-white font-bold py-3 px-4 rounded-xl hover:bg-red-800 transition-colors shadow-md active:scale-95 transform duration-150"
                >
                  Comprar Agora
                </a>
              </div>
            </div>
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
              Não se preocupe! Nós temos parceria com <strong>todos os parques de Gramado e Canela</strong>. 
              Se a atração que você deseja não está listada acima, entre em contato conosco agora mesmo. 
              Estamos esperando para atendê-lo e conseguir exatamente o que você precisa.
            </p>
            <a 
               href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, estou procurando um parque que não achei no site, pode me ajudar?`}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
            >
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Tickets;