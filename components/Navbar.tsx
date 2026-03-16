import React, { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Ingressos', path: '/ingressos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md">
      {/* Main Navigation - Reduced height from h-20 to h-20 */}
      <nav className="bg-transparent text-brand-dark relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Adjusted height for new navbar size */}
            <Link to="/" className="flex items-center group">
              <img 
                src="https://i.postimg.cc/Gt081HsY/Whats-App-Image-2026-01-29-at-13-40-51-removebg-preview.png" 
                alt="AquiTchê Turismo" 
                className="h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-6 py-2.5 rounded-full text-sm font-extrabold tracking-widest uppercase transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-brand-dark bg-brand-gold shadow-[0_4px_14px_0_rgba(255,184,0,0.39)] transform -translate-y-1'
                        : 'text-gray-700 hover:text-brand-red hover:bg-red-50 hover:-translate-y-0.5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Instagram Icon */}
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 hover:text-pink-700 transition-colors shadow-sm"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
               <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-red hover:bg-red-50 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-bold ${
                     isActive(link.path)
                        ? 'text-brand-red bg-red-50'
                        : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Sticky Banner - Removed border-b to eliminate white stripe effect */}
      <div className="w-full bg-brand-red/5 overflow-hidden h-12 md:h-14 flex items-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-marquee">
             {/* Duplicate images to create seamless loop. */}
             {[...Array(6)].map((_, i) => (
                <img 
                  key={i}
                  src="https://i.postimg.cc/LXv9x53j/banner-para-site.png" 
                  alt="Banner Promocional" 
                  className="h-12 md:h-14 w-auto object-cover opacity-95"
                />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;