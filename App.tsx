import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { AsciiBackground } from './components/AsciiBackground';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <AsciiBackground />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Projects />
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;