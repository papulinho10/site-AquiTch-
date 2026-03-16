import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, MapPin, Cloud, Compass, Camera, Sun, Ticket } from 'lucide-react';

const TravelBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -250]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-brand-cream">
      {/* Glowing Ambient Blobs for Dopamine/Vibrancy */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-gold/40 mix-blend-multiply filter blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-red/30 mix-blend-multiply filter blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-brand-wine/30 mix-blend-multiply filter blur-[100px]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[60%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-green/20 mix-blend-multiply filter blur-[80px]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2], x: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Map Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Flight Path */}
      <svg className="absolute w-full h-full opacity-20" style={{ top: 0, left: 0 }}>
        <motion.path
          d="M -100,200 Q 300,50 600,300 T 1200,100"
          fill="transparent"
          stroke="#FF3B30"
          strokeWidth="3"
          strokeDasharray="12,12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M -100,600 Q 400,800 800,500 T 1400,700"
          fill="transparent"
          stroke="#00A8E8"
          strokeWidth="3"
          strokeDasharray="12,12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1400,300 Q 1000,100 600,400 T -100,500"
          fill="transparent"
          stroke="#00C853"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Floating Elements - Thematic Serra Gaúcha */}
      <motion.div 
        className="absolute top-[15%] left-[15%] text-6xl drop-shadow-2xl"
        style={{ y: y1, x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        🧉
      </motion.div>

      <motion.div 
        className="absolute top-[45%] right-[10%] text-7xl drop-shadow-2xl"
        style={{ y: y2, x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        🍷
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] left-[10%] text-7xl drop-shadow-2xl"
        style={{ y: y3, x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        🌲
      </motion.div>

      <motion.div 
        className="absolute top-[65%] left-[50%] text-6xl drop-shadow-2xl"
        style={{ y: y1, x: mousePosition.x * 1, y: mousePosition.y * 1 }}
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        🍫
      </motion.div>

      <motion.div 
        className="absolute top-[20%] right-[30%] text-5xl drop-shadow-2xl"
        style={{ y: y2, x: mousePosition.x * -1.2, y: mousePosition.y * -1.2 }}
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ❄️
      </motion.div>

      <motion.div 
        className="absolute bottom-[15%] right-[20%] text-6xl drop-shadow-2xl"
        style={{ y: y3, x: mousePosition.x * 1.8, y: mousePosition.y * 1.8 }}
        animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        🍇
      </motion.div>

      {/* Airplane flying across */}
      <motion.div
        className="absolute top-[30%] text-brand-red/40 drop-shadow-xl"
        initial={{ left: '-10%', rotate: 15 }}
        animate={{ left: '110%', top: '20%' }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Plane size={56} />
      </motion.div>

      <motion.div
        className="absolute bottom-[40%] text-brand-blue/30 drop-shadow-xl"
        initial={{ right: '-10%', rotate: -15 }}
        animate={{ right: '110%', bottom: '50%' }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        <Plane size={48} className="transform scale-x-[-1]" />
      </motion.div>
    </div>
  );
};

export default TravelBackground;
