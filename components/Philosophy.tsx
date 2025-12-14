import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
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
          <span className="block md:hidden">I create <span className="text-swiss-red">scalable</span> systems that unify design and experience.</span>
          <span className="hidden md:block">I create <span className="text-swiss-red">scalable</span> systems and natural interfaces that unify design, engineering, and user experience.</span>
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
              (Approach)
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
              <span className="font-normal text-deep-black">My work is the architecture behind how products move.</span>
            </p>

            {/* Desktop Text */}
            <div className="hidden md:block space-y-8">
              <p className="font-sans text-base md:text-lg leading-relaxed font-light text-deep-black/70">
                I’m obsessed with the "feel" of a digital product—the way a scroll feels snappy or a transition provides just enough feedback to keep you curious.
              </p>

              <p className="font-sans text-base md:text-lg leading-relaxed font-light text-deep-black/70">
                My work unifies design and engineering to create that specific kind of excitement that makes people want to keep exploring. By grounding everything in clean SQL and Supabase backends, I ensure that the beauty isn't just skin deep, but built on a foundation that can handle growth.
              </p>
            </div>

            {/* Mobile Text (Shortened) */}
            <div className="block md:hidden">
              <p className="font-sans text-base leading-relaxed font-light text-deep-black/70">
                I’m obsessed with the "feel" of a product. My work unifies design and engineering to create experiences that are both beautiful and built on a solid foundation.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};