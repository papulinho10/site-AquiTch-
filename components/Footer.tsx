import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AquiTchê Turismo</h3>
            <p className="text-sm leading-relaxed mb-4">
              Sua parceira oficial Parksnet na Serra Gaúcha. Proporcionamos as melhores experiências com segurança e praticidade.
            </p>
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