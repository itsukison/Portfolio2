import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 bg-off-white/80 backdrop-blur-sm border-b border-black/5 h-20"
    >
      <div className="flex items-center gap-12">
        <motion.h1 className="font-black text-2xl tracking-tighter uppercase font-sans">
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