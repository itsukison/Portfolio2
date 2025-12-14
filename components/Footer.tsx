import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-deep-black text-off-white h-[100dvh] md:h-auto md:min-h-[80vh] py-12 md:py-32 relative overflow-hidden -mb-12 flex flex-col justify-center md:block">
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between md:block">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:mb-24 shrink-0 order-2 md:order-1 mt-8 md:mt-0">
          <div>
            <h2 className="font-sans text-2xl mb-4 md:mb-8">Itsuki Son</h2>
            <div className="flex gap-6 text-sm font-mono opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">Info</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Case Studies</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Photography</a>
            </div>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Mail size={18} />
            </a>
            <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Middle Section (Main Call to Action) */}
        <div className="max-w-4xl flex-grow flex flex-col justify-center md:block md:flex-grow-0 order-1 md:order-2">
          <p className="font-sans text-3xl md:text-6xl md:leading-tight font-light mb-8 md:mb-12">
            I turn coffee into code and brands into cultural forces.
          </p>

          <div className="relative inline-block group">
            <a href="mailto:hello@itsuki.works" className="font-serif text-5xl md:text-8xl italic hover:text-white/80 transition-colors">
              Let's build.
              <span className="block h-1 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </a>
            <ArrowIcon className="absolute -top-4 -right-8 md:-right-20 w-8 h-8 md:w-20 md:h-20 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between font-mono text-xs opacity-40 uppercase shrink-0 order-3 md:order-3">
          <p>© 2025 Itsuki Son. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <p>Tokyo, Japan</p>
            <p>Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>

      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);