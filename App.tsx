import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Identity } from './components/Identity';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative w-full overflow-hidden">
        <Header />

        <main className="relative z-10">
          <Hero />
          <Philosophy />
          <Projects />
          <About />
          <Identity />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;