import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import TiltedCard from './ui/tilted';



export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { t } = useLanguage();

  // Smooth springs for parallax
  const xSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Floating text transforms
  const moveX1 = useTransform(xSpring, [-0.5, 0.5], [30, -30]);
  const moveY1 = useTransform(ySpring, [-0.5, 0.5], [30, -30]);
  const moveX2 = useTransform(xSpring, [-0.5, 0.5], [-20, 20]);
  const moveY2 = useTransform(ySpring, [-0.5, 0.5], [-20, 20]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const mouseNormalizedX = (clientX / innerWidth) - 0.5;
    const mouseNormalizedY = (clientY / innerHeight) - 0.5;
    mouseX.set(mouseNormalizedX);
    mouseY.set(mouseNormalizedY);
  };

  // Interactive ASCII Eye Logic logic removed

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[100dvh] md:min-h-[100dvh] pt-0 md:pt-20 flex flex-col justify-center items-center overflow-hidden"
    >

      {/* Floating Elements with Parallax */}
      <motion.div
        style={{ x: moveX1, y: moveY1 }}
        className="absolute top-[15%] left-[10%] md:top-[20%] md:left-[20%] font-mono text-xs md:text-sm rotate-[-12deg] z-0 pointer-events-none mix-blend-difference opacity-60 md:opacity-100"
      >
        {t.hero.floatingText1.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </motion.div>

      <motion.div
        style={{ x: moveX2, y: moveY2 }}
        className="absolute bottom-[20%] right-[10%] md:bottom-[25%] md:right-[20%] font-mono mt-12 md:mt-0 text-xs md:text-sm rotate-[12deg] z-0 pointer-events-none mix-blend-difference opacity-60 md:opacity-100"
      >
        {t.hero.floatingText2.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </motion.div>

      {/* Main Center Piece */}
      <motion.div
        style={{ y: scrollY, opacity }}
        className="relative mt-14 md:mt-0 z-20 mb-10 md:mb-8 transition-all duration-300 w-[70vw] md:w-[320px]"
      >
        <div className="w-full relative">
          <TiltedCard
            imageSrc="/myself.png"
            altText="Itsuki Son"
            captionText=""
            containerHeight="auto"
            containerWidth="100%"
            imageHeight="auto"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
      </motion.div>


      {/* Big Title - Scaled to fit */}
      <div className="relative z-10 text-center mix-blend-multiply select-none flex flex-col items-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[13vw] md:text-[6vw] leading-[0.9] md:leading-[0.8] tracking-tight"
        >
          {t.hero.title1}
        </motion.h2>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-[13vw] md:text-[6vw] leading-[0.9] md:leading-[0.8] tracking-tight italic"
        >
          {t.hero.title2}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 md:mt-12 max-w-[80%] md:max-w-sm text-center px-0 md:px-6 font-mono text-[10px] md:text-xs leading-relaxed"
      >
        <p>
          {t.hero.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="mt-8 md:mt-8"
      >
        <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-2 bg-black text-white font-mono text-xs uppercase overflow-hidden rounded-full hover:bg-swiss-red transition-colors duration-300">
          <span className="relative z-10">{t.hero.cta}</span>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50">
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
        </svg>
      </motion.div>

    </section>
  );
};