import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Tickets from './pages/Tickets';

function App() {
  return (
    <HashRouter>
      <div className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingressos" element={<Tickets />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}

export default App;