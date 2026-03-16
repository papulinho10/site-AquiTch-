import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8 border-t-4 border-brand-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=50')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              AquiTchê <span className="text-brand-red">Turismo</span>
            </h3>
            <p className="text-base leading-relaxed text-gray-400">
              Sua parceira oficial <strong className="text-brand-gold">Parksnet</strong> na Serra Gaúcha. Proporcionamos as melhores experiências com segurança, praticidade e muita diversão!
            </p>
            <div className="flex space-x-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors cursor-pointer">
                ✨
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-brand-red hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
                🍷
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-pointer">
                🌲
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/#/" className="hover:text-brand-red transition-colors">Início</a></li>
              <li><a href="/#/ingressos" className="hover:text-brand-red transition-colors">Comprar Ingressos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-brand-red" />
                <span>{COMPANY_INFO.whatsappDisplay}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-brand-red" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 text-brand-red" />
                <span>Gramado, RS - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AquiTchê Turismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;