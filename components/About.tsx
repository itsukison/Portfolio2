import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#CCCCB2] min-h-[100dvh] md:min-h-[80vh] text-deep-black border-t border-black/10">
      <div className="container mx-auto h-full flex flex-col md:flex-row border-l border-r border-black/10 bg-[#CCCCB2]">

        {/* Column 1: Name */}
        <div className="w-full md:w-1/4 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-normal tracking-tight sticky mt-16 md:mt-0 top-32">{t.about.title}</h2>
          </div>
          <div className="text-4xl animate-spin-slow origin-center w-min mt-2 md:mt-0">
            ✶
          </div>
        </div>

        {/* Column 2: Empty Spacer for Rhythm (Swiss Grid) */}
        <div className="hidden md:block w-1/4 border-r border-black/10 bg-black/5"></div>



        {/* Column 4: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center md:justify-between">
          <div className="max-w-2xl mt-12 md:mt-0">
            <span className="font-mono text-xs uppercase mb-4 block opacity-60">{t.about.label}</span>

            {/* Desktop Text */}
            <p className="hidden md:block font-sans text-xl md:text-[1.75rem] leading-[1.35] font-light">
              {t.about.textDesktop}
            </p>

            {/* Mobile Text (Shortened) */}
            <p className="block md:hidden font-sans text-2xl leading-snug font-light">
              {t.about.textMobile}
            </p>

            <p className="font-sans text-xl md:text-[1.75rem] leading-[1.35] font-light mt-8">
              {t.about.tagline}
            </p>
          </div>

          <div className="mt-4 md:mt-12 pb-8 md:pb-0">
            <p className="font-sans text-xl md:text-2xl">
              {t.about.cta} <a href="#contact" className="underline decoration-1 underline-offset-4 hover:decoration-2 hover:text-swiss-red transition-colors">{t.about.ctaLink}</a>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};