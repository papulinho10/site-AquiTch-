import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import TravelBackground from './components/TravelBackground';
import Home from './pages/Home';
import Tickets from './pages/Tickets';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-900 bg-transparent relative min-h-screen flex flex-col">
        <TravelBackground />
        <div className="relative z-10 flex flex-col flex-grow">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ingressos" element={<Tickets />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}

export default App;