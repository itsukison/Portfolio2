import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 bg-off-white/80 backdrop-blur-sm border-b border-black/5 h-20"
    >
      <div className="flex items-center gap-12">
        <motion.h1 className="font-black text-2xl tracking-tighter uppercase font-sans">
          ITSUKI.WORKS
        </motion.h1>
        <div className="hidden md:block text-xs font-mono uppercase opacity-60">
          <p>{t.header.location}</p>
          <p>{t.header.vat}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="relative flex items-center gap-1 px-3 py-1.5 border border-black/20 rounded-full font-mono text-xs uppercase hover:bg-black hover:text-white transition-colors duration-200"
          aria-label="Toggle language"
        >
          <span className={`transition-opacity duration-200 ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}>EN</span>
          <span className="text-black/30">/</span>
          <span className={`transition-opacity duration-200 ${language === 'ja' ? 'opacity-100' : 'opacity-40'}`}>JP</span>
        </button>

        <div className="text-right font-mono text-xs uppercase">
          <p>{t.header.hours}</p>
          <p suppressHydrationWarning>{time.toLocaleTimeString('en-US', { hour12: false })}</p>
        </div>
      </div>
    </motion.header>
  );
};