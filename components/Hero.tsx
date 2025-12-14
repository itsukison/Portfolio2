import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Interactive ASCII Eye Logic logic removed

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] pt-20 flex flex-col justify-center items-center overflow-hidden"
    >

      {/* Floating Elements with Parallax */}
      <motion.div
        style={{ x: moveX1, y: moveY1 }}
        className="absolute top-[20%] left-[10%] md:left-[20%] font-mono text-xs md:text-sm rotate-[-12deg] z-0 pointer-events-none mix-blend-difference"
      >
        <p>LOGIC</p>
        <p>CAN</p>
        <p>WAIT</p>
      </motion.div>

      <motion.div
        style={{ x: moveX2, y: moveY2 }}
        className="absolute bottom-[25%] right-[10%] md:right-[20%] font-mono text-xs md:text-sm rotate-[12deg] z-0 pointer-events-none mix-blend-difference"
      >
        <p>TOKYO</p>
        <p>NOW</p>
      </motion.div>

      {/* Main Center Piece */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 mb-8 transition-all duration-300 w-[60vw] md:w-[320px]"
      >
        <div className="p-0 bg-transparent w-full overflow-hidden relative">
          <img
            src="/myself.png"
            alt="Itsuki Son"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Big Title - Scaled to fit */}
      <div className="relative z-10 text-center mix-blend-multiply select-none">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[8vw] md:text-[6vw] leading-[0.8] tracking-tight"
        >
          Aesthetics &
        </motion.h2>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-[8vw] md:text-[6vw] leading-[0.8] tracking-tight italic"
        >
          Algorithms.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 md:mt-12 max-w-sm text-center px-6 font-mono text-xs leading-relaxed"
      >
        <p>
          Itsuki Son — Creative engineer based in Tokyo.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="mt-8"
      >
        <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-2 bg-black text-white font-mono text-xs uppercase overflow-hidden rounded-full hover:bg-swiss-red transition-colors duration-300">
          <span className="relative z-10">Initialize Contact</span>
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