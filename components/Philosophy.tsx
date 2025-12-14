import React from 'react';
import { motion } from 'framer-motion';

const TextBlock = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={`max-w-4xl mx-auto px-6 py-8 md:py-16 text-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Philosophy: React.FC = () => {
  return (
    <section className="bg-white py-20 relative z-10">
      <div className="container mx-auto">
        
        <TextBlock>
          <p className="font-serif text-3xl md:text-5xl leading-tight">
            This developer is <span className="italic text-swiss-red">agile</span> by design.
          </p>
        </TextBlock>

        <TextBlock>
          <p className="font-sans text-xl md:text-3xl leading-snug font-light text-deep-black/80">
            No bloated meetings. No layers of management. 
            Just a full-stack engineer that moves fast, prototypes early, 
            and isn't afraid to refactor things down to their essence.
          </p>
        </TextBlock>

        <TextBlock>
          <p className="font-sans text-xl md:text-3xl leading-snug font-light text-deep-black/80">
            Close to the code.
            <br />
            <span className="font-mono text-sm uppercase tracking-widest mt-4 block opacity-50">Commit 58a92f • Pushing forward</span>
          </p>
        </TextBlock>

      </div>
    </section>
  );
};