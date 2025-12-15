import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  // Helper to highlight the scalable word
  const renderHighlightedHeading = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}<span className="text-swiss-red">{highlight}</span>{parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section className="bg-off-white min-h-[100dvh] md:min-h-screen text-deep-black border-t border-black/10 flex flex-col justify-center md:block">
      <div className="container mx-auto px-6 md:px-12 py-4 md:py-20 lg:py-20">

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight max-w-5xl mb-8 md:mb-20"
        >
          <span className="block md:hidden">{renderHighlightedHeading(t.philosophy.headingMobile, t.philosophy.headingHighlight)}</span>
          <span className="hidden md:block">{renderHighlightedHeading(t.philosophy.headingDesktop, t.philosophy.headingHighlight)}</span>
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">

          {/* Left Column: Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 hidden md:block"
          >
            <p className="font-sans text-base md:text-lg font-normal text-deep-black/70">
              {t.philosophy.label}
            </p>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-9 space-y-2 md:space-y-8"
          >
            <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-deep-black/90">
              <span className="font-normal text-deep-black">{t.philosophy.mainText}</span>
            </p>

            {/* Desktop Text */}
            <div className="hidden md:block space-y-8">
              <p className="font-sans text-base md:text-lg leading-relaxed font-light text-deep-black/70">
                {t.philosophy.paragraph1}
              </p>

              <p className="font-sans text-base md:text-lg leading-relaxed font-light text-deep-black/70">
                {t.philosophy.paragraph2}
              </p>
            </div>

            {/* Mobile Text (Shortened) */}
            <div className="block md:hidden">
              <p className="font-sans text-base leading-relaxed font-light text-deep-black/70">
                {t.philosophy.paragraphMobile}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};