import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Heart, ArrowRight, PlayCircle } from 'lucide-react';
import { HERO_CONTENT, PARKS_DATA, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  // Take first 3 parks for preview
  const featuredParks = PARKS_DATA.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream font-sans">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-red/80 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/KvYPrsys/Design-sem-nome-(2).png" 
            alt="Gramado Landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-5xl px-4 mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-xl md:text-3xl font-medium mb-8 drop-shadow-lg text-white/95 max-w-3xl mx-auto leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>
          <Link
            to="/ingressos"
            className="inline-flex items-center px-10 py-5 text-xl font-bold text-brand-red bg-white rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-gold/50"
          >
            {HERO_CONTENT.cta}
            <ArrowRight className="ml-3" size={28} />
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white relative z-10 -mt-10 rounded-t-[3rem] shadow-lg mx-2 md:mx-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 hover:bg-blue-50 rounded-2xl transition-colors duration-300 group">
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
      </section>

      {/* Parksnet Banner - Infinite Scroll Clean (No Background/Frame) */}
      <section className="bg-white py-2 overflow-hidden">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-marquee">
             {/* Duplicate images to create seamless loop. Image is wide so 2 or 3 is enough */}
             {[...Array(4)].map((_, i) => (
                <img 
                  key={i}
                  src="https://i.postimg.cc/FFZNvYcc/banner-para-site-Parksnet.png" 
                  alt="Parksnet Partner Banner" 
                  className="h-24 md:h-28 w-auto object-cover"
                />
             ))}
          </div>
        </div>
      </section>

      {/* Video & Persuasion Section - Standard Light Style */}
      <section className="py-24 bg-brand-cream text-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Video (Compact & Tall) */}
            <div className="w-full lg:w-4/12 flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 w-full max-w-[320px] lg:max-w-full aspect-[9/16] border border-gray-200 z-10">
                <iframe 
                  src="https://drive.google.com/file/d/1k4kStrSs_uEE6OVH61AI6gJLXQuPjopw/preview?autoplay=1" 
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  title="Vídeo Institucional AquiTchê"
                ></iframe>
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
                  Criamos roteiros personalizados para que você vivencie o melhor de Gramado, Canela e Bento Gonçalves. Dos vinhedos renomados ao charme das ruas floridas, nossa missão é transformar sua viagem em memórias eternas.
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

      {/* Featured Parks Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Destaques da Serra</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Selecionamos as experiências mais incríveis para você. Escolha seu destino e prepare-se para a diversão.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredParks.map((park) => (
              <div key={park.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={park.image} alt={park.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">{park.name}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-base">{park.description}</p>
                  <Link 
                    to="/ingressos" 
                    className="flex w-full items-center justify-center py-4 border-2 border-brand-red text-brand-red font-bold rounded-xl hover:bg-brand-red hover:text-white transition-all uppercase tracking-wide text-sm"
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

      {/* CTA Bottom */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Suas férias merecem ser perfeitas!</h2>
          <p className="text-2xl mb-10 opacity-90 font-medium">Não deixe para a última hora. Fale com nossa equipe especializada e monte o roteiro dos seus sonhos.</p>
          <a 
             href={`https://wa.me/5554996413434?text=Olá, gostaria de ajuda para planejar meu roteiro em Gramado!`}
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