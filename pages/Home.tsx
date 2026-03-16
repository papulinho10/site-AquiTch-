import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Heart, ArrowRight, PlayCircle, Ticket, Clock, MessageCircle, UserCheck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, PARKS_DATA, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  // Take first 3 parks for preview
  const featuredParks = PARKS_DATA.slice(0, 3);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Setup Intersection Observer to play video when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, try to play
            videoRef.current?.play().catch((e) => {
              console.log('Autoplay prevented by browser policy:', e);
            });
          } else {
            // Video is out of view, pause
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent font-sans">
      {/* Hero Section */}
      {/* Adjusted height for mobile to minimize cropping of the landscape image */}
      <section className="relative min-h-[70vh] md:min-h-[650px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-red/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/KvYPrsys/Design-sem-nome-(2).png" 
            alt="Gramado Landscape" 
            className="w-full h-full object-cover object-center" 
          />
        </div>
        <div className="relative z-20 max-w-5xl px-4 mx-auto space-y-6 md:space-y-8 animate-fade-in-up pb-12 md:pb-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl leading-tight">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-medium mb-8 drop-shadow-lg text-white/95 max-w-3xl mx-auto leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>
          <Link
            to="/ingressos"
            className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-bold text-brand-red bg-white rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-gold/50"
          >
            {HERO_CONTENT.cta}
            <ArrowRight className="ml-3" size={24} />
          </Link>
        </div>
      </section>

      {/* Trust Indicators & Parksnet Banner Unified Section */}
      {/* Removed mx-2 md:mx-10 to allow full width. Removed pb-6 to remove white bar below banner. */}
      <section className="pt-10 md:pt-16 bg-white relative z-30 -mt-8 md:-mt-16 rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.2)] md:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] border-t border-white/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="p-6 md:p-8 hover:bg-blue-50 rounded-2xl transition-colors duration-300 group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-brand-blue" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Parceria Oficial Parksnet</h3>
              <p className="text-gray-600 leading-relaxed">Sua segurança em primeiro lugar com ingressos oficiais e garantia de procedência.</p>
            </div>
            <div className="p-8 hover:bg-yellow-50 rounded-2xl transition-colors duration-300 group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-brand-gold" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Entrega Imediata</h3>
              <p className="text-gray-600 leading-relaxed">Sem filas! Receba seus vouchers no celular instantaneamente após a compra.</p>
            </div>
            <div className="p-8 hover:bg-red-50 rounded-2xl transition-colors duration-300 group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-brand-red" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Atendimento com Amor</h3>
              <p className="text-gray-600 leading-relaxed">Somos apaixonados pela Serra Gaúcha e queremos que você também seja.</p>
            </div>
          </div>
        </div>

      {/* Parksnet Banner - Integrated directly here to share the white background card */}
      {/* Removed opacity-80 and ensured full width display */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-marquee whitespace-nowrap min-w-full">
           {[...Array(12)].map((_, i) => (
              <img 
                key={i}
                src="https://i.postimg.cc/FFZNvYcc/banner-para-site-Parksnet.png" 
                alt="Parksnet Partner Banner" 
                className="h-20 md:h-24 w-auto object-contain flex-shrink-0"
                loading="eager"
              />
           ))}
        </div>
      </div>
    </section>

      {/* Featured Parks Preview - Moved up */}
      <section className="py-20 bg-brand-cream/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Destaques da Serra</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Selecionamos as experiências mais incríveis para você. Escolha seu destino e prepare-se para a diversão.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredParks.map((park) => (
              <div key={park.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 flex flex-col h-full">
                <div className="relative w-full overflow-hidden border-b border-gray-100">
                  <img src={park.images[0]} alt={park.name} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">{park.name}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-base flex-grow">{park.description}</p>
                  <Link 
                    to="/ingressos" 
                    className="flex w-full items-center justify-center py-4 border-2 border-brand-red text-brand-red font-bold rounded-xl hover:bg-brand-red hover:text-white transition-all uppercase tracking-wide text-sm mt-auto"
                  >
                    Garanta seu Lugar
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/ingressos" className="inline-flex items-center text-lg font-bold text-brand-red hover:text-red-700 transition-colors underline decoration-2 underline-offset-4">
              Ver todas as atrações disponíveis <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video & Persuasion Section - Standard Light Style */}
      <section className="py-24 bg-brand-cream/80 backdrop-blur-md text-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Video (Compact & Tall) */}
            <div className="w-full lg:w-4/12 flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 w-full max-w-[320px] lg:max-w-full aspect-[9/16] border border-gray-200 z-10">
                {/* Updated Video Link - HTML5 Video Tag for direct MP4 */}
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="https://files.catbox.moe/qw1zpc.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>

            {/* Right: Persuasive Text - Standard Style */}
            <div className="w-full lg:w-8/12 space-y-8 text-left">
              <div>
                <span className="text-brand-red uppercase tracking-[0.2em] text-sm font-bold mb-4 block">
                  Experiências Únicas
                </span>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Onde cada passeio <br className="hidden md:block" /> conta uma <span className="text-brand-red italic">história.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
                <p>
                  Aqui no sul, a hospitalidade é nossa tradição. Somos gaúchos de coração e conhecemos cada detalhe que faz da Serra Gaúcha um lugar mágico.
                </p>
                <p>
                  Criamos roteiros personalizados para que você vivencie o melhor da Serra Gaúcha. Dos vinhedos renomados ao charme das ruas floridas, nossa missão é transformar sua viagem em memórias eternas.
                </p>
                <p className="text-gray-800 font-semibold border-l-4 border-brand-red pl-6 py-1">
                  "Mais do que vender ingressos, guiamos você por experiências autênticas, sabores inesquecíveis e paisagens de tirar o fôlego, com o conforto e o carinho que você merece."
                </p>
              </div>
              
              <div className="pt-4">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, me encantei com o site e quero planejar minha viagem!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-brand-red text-brand-red text-lg hover:bg-brand-red hover:text-white transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold shadow-md hover:shadow-lg"
                >
                  <PlayCircle className="mr-3" size={20} />
                  Falar com Consultor
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* New CTA Section - Dopamine Boosted */}
      <section className="py-20 bg-gradient-to-r from-brand-red via-red-500 to-brand-wine relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://i.postimg.cc/KvYPrsys/Design-sem-nome-(2).png')] bg-cover bg-center mix-blend-overlay animate-pulse-fast"></div>
        
        {/* Floating background elements for CTA */}
        <motion.div 
          className="absolute top-10 left-10 text-white/20 text-6xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 text-brand-gold/40 text-8xl"
          animate={{ y: [0, -20, 0], rotate: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎟️
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-6 py-2 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/30 animate-pulse">
            Oferta por Tempo Limitado
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-xl">
            Pronto para viver a magia da <span className="text-brand-gold">Serra Gaúcha?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/95 drop-shadow-md font-medium">
            Descubra parques incríveis, museus fascinantes e experiências gastronômicas inesquecíveis. Não deixe para depois!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/ingressos" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-brand-dark font-extrabold rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 text-base overflow-hidden"
            >
              <Ticket className="mr-3 group-hover:rotate-12 transition-transform" size={28} />
              <span className="relative">Explorar Todos os Ingressos</span>
            </Link>
            
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, quero aproveitar as ofertas para a Serra Gaúcha!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-red transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              <MessageCircle className="mr-3" size={24} />
              Chamar no WhatsApp
            </a>
          </div>
          
          <p className="mt-8 text-white/80 text-sm font-medium flex items-center justify-center">
            <ShieldCheck size={16} className="mr-2 text-brand-green" />
            Compra 100% segura e garantida pela Parksnet
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US / ESSENCE SECTION */}
      <section className="py-20 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
             <span className="inline-block px-4 py-2 rounded-full border border-brand-red/30 bg-red-50 text-brand-red text-sm font-bold tracking-wider uppercase">
                <UserCheck className="inline-block w-4 h-4 mr-2 mb-0.5" />
                Nossa Essência
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Por que escolher a <span className="text-brand-red">AquiTchê?</span>
             </h2>
             <div className="max-w-3xl mx-auto mt-6">
               <p className="text-xl text-gray-600 font-medium">
                 Na AquiTchê, transformamos sonhos em realidade.
               </p>
               <p className="mt-4 text-gray-500 leading-relaxed">
                 Somos especialistas em criar experiências únicas e memoráveis na Serra Gaúcha, 
                 conectando você aos melhores destinos e atrações da região com o carinho e a dedicação que você merece.
               </p>
             </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excelência em Atendimento</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe especializada oferece suporte personalizado desde o primeiro contato até o final da sua viagem.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Ticket className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingressos com Desconto</h3>
              <p className="text-gray-600 leading-relaxed">
                Parcerias exclusivas com as principais atrações nos permitem oferecer os melhores preços.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disponibilidade Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Atendimento ágil via WhatsApp e flexibilidade para atender suas necessidades específicas.
              </p>
            </div>

          </div>

          {/* Contact Box (Standard Blue Alert Design - Matching Tickets Page Style) */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm flex flex-col md:flex-row items-start gap-6">
             <div className="flex-shrink-0">
                <AlertCircle size={48} className="text-blue-500" />
             </div>
             
             <div className="flex-1">
               <h3 className="text-2xl font-bold text-gray-900 mb-2">
                 Não encontrou o <span className="text-blue-600">ingresso</span> que procurava?
               </h3>
               <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                 Não se preocupe! Nós temos parceria com <strong>todos os parques da Serra Gaúcha</strong>. 
                 Se a atração que você deseja não está listada em nosso site, nossa equipe encontra a melhor opção para você.
               </p>
               <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá, estou procurando um ingresso específico e preciso de ajuda!`}
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
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-brand-blue/95 backdrop-blur-md relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Suas férias merecem ser perfeitas!</h2>
          <p className="text-2xl mb-10 opacity-90 font-medium">Não deixe para a última hora. Fale com nossa equipe especializada e monte o roteiro dos seus sonhos.</p>
          <a 
             href={`https://wa.me/5554996413434?text=Olá, gostaria de ajuda para planejar meu roteiro na Serra Gaúcha!`}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-12 py-5 bg-brand-gold text-brand-dark text-xl font-bold rounded-full hover:bg-white hover:text-brand-red transition-all shadow-xl transform hover:scale-105"
          >
            Falar com Especialista Agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;