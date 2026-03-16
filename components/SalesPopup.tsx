import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'lucide-react';

const names = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro', 'Julia', 'Lucas', 'Camila', 'Fernanda', 'Rafael'];
const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Brasília', 'Salvador', 'Florianópolis', 'Porto Alegre'];
const parks = ['Snowland', 'Acquamotion', 'Skyglass', 'Alpen Park', 'Vila da Mônica', 'Mini Mundo', 'Super Carros'];

const SalesPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', city: '', park: '' });

  useEffect(() => {
    const triggerPopup = () => {
      setData({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        park: parks[Math.floor(Math.random() * parks.length)],
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    // Random interval between 10s and 20s
    const interval = setInterval(triggerPopup, 10000 + Math.random() * 10000);
    
    // Initial popup after 3 seconds
    const initialTimeout = setTimeout(triggerPopup, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 left-4 md:left-6 z-50 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/50 flex items-center gap-4 max-w-[320px] md:max-w-sm"
        >
          <div className="bg-gradient-to-br from-brand-gold to-orange-500 p-3 rounded-full shadow-lg animate-pulse-fast">
            <Ticket className="text-white" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-700 leading-tight">
              <span className="font-extrabold text-gray-900">{data.name}</span> de {data.city}
            </p>
            <p className="text-xs font-bold text-brand-red mt-1 flex items-center gap-1">
              <span>🔥</span> Garantiu ingressos para {data.park}!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesPopup;
