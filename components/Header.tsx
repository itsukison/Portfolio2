import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [120, 80]);
  const logoScale = useTransform(scrollY, [0, 100], [1.5, 1]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.header 
      style={{ height }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 bg-off-white/80 backdrop-blur-sm border-b border-black/5"
    >
      <div className="flex items-center gap-12">
        <motion.h1 style={{ scale: logoScale, originX: 0 }} className="font-black text-2xl tracking-tighter uppercase font-sans">
          ITSUKI.WORKS
        </motion.h1>
        <div className="hidden md:block text-xs font-mono uppercase opacity-60">
          <p>Based in Tokyo</p>
          <p>VAT JP88920192</p>
        </div>
      </div>

      <div className="text-right font-mono text-xs uppercase">
        <p>M-F 10-19</p>
        <p suppressHydrationWarning>{time.toLocaleTimeString('en-US', { hour12: false })}</p>
      </div>
    </motion.header>
  );
};