import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="bg-[#CCCCB2] min-h-[80vh] text-deep-black border-t border-black/10">
      <div className="container mx-auto h-full flex flex-col md:flex-row border-l border-r border-black/10 bg-[#CCCCB2]">
        
        {/* Column 1: Name */}
        <div className="w-full md:w-1/4 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-between">
          <div>
            <h2 className="font-sans text-xl md:text-2xl font-normal tracking-tight sticky top-32">Itsuki Son</h2>
          </div>
          <div className="text-4xl animate-spin-slow origin-center w-min mt-12 md:mt-0">
            ✶
          </div>
        </div>

        {/* Column 2: Empty Spacer for Rhythm (Swiss Grid) */}
        <div className="hidden md:block w-1/4 border-r border-black/10 bg-black/5"></div>

        {/* Column 3: Spacer */}
        <div className="hidden md:block w-1/4 border-r border-black/10"></div>

        {/* Column 4: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
          <div className="max-w-xl">
             <span className="font-mono text-xs uppercase mb-4 block opacity-60">(Design + Engineering)</span>
             <p className="font-sans text-xl md:text-3xl leading-snug font-light">
               A developer with over 8 years of practice in React, 
               design systems, web and mobile apps. I help clients 
               communicate and solve problems through clear, thoughtful code.
             </p>
             <p className="font-sans text-xl md:text-3xl leading-snug font-light mt-8">
               Elegant, understated logic. Solutions shaped by structure and restraint.
             </p>
          </div>

          <div className="mt-20">
            <p className="font-sans text-xl md:text-2xl">
              Don't hesitate to <a href="#contact" className="underline decoration-1 underline-offset-4 hover:decoration-2 hover:text-swiss-red transition-colors">get in touch</a>. 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};