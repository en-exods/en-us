import React from 'react';
import { Rocket, Shield, Zap, Globe, BarChart3, Wallet, ArrowRight, Twitter, Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Content />
      <Footer />
    </div>
  );
}

export default App;