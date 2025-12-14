import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    client: "Prospect Work",
    title: "Branding Digital Design",
    description: "A concept rebranding created for BRET a cultural space located in the heart of Sloterdijk, Amsterdam.",
    year: "2024",
    imageUrl: "https://picsum.photos/1600/900?random=1",
    tags: ["Branding", "Web"]
  },
  {
    id: 2,
    client: "Aurora Halal",
    title: "Event Identity",
    description: "Visual identity and web experience for the underground electronic music festival.",
    year: "2023",
    imageUrl: "https://picsum.photos/1600/900?random=2",
    tags: ["Identity", "Dev"]
  },
  {
    id: 3,
    client: "Daycare",
    title: "E-commerce Platform",
    description: "Full stack Shopify headless implementation for a modern skincare brand.",
    year: "2023",
    imageUrl: "https://picsum.photos/1600/900?random=3",
    tags: ["Shopify", "React"]
  }
];

export const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="bg-off-white py-20 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Row */}
        <div className="grid grid-cols-12 gap-4 mb-8 font-mono text-xs uppercase opacity-50 border-b border-black/10 pb-2">
          <div className="col-span-12 md:col-span-4">Client</div>
          <div className="col-span-12 md:col-span-4">Discipline</div>
          <div className="col-span-12 md:col-span-4 text-right">Year</div>
        </div>

        <div className="space-y-32">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-none" // Using custom cursor logic globally or locally
            >
              {/* Text Info */}
              <div className="grid grid-cols-12 gap-4 mb-6 relative z-10">
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-serif text-3xl md:text-5xl mb-2 group-hover:italic transition-all duration-300">
                    {project.client}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="font-sans text-xl md:text-2xl font-medium leading-tight">
                    {project.title}
                  </div>
                  <p className="font-mono text-xs mt-4 max-w-xs opacity-60">
                    {project.description}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 text-right">
                   <span className="font-mono text-xl">{project.year}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden w-full aspect-video bg-gray-200">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
                
                {/* Overlay ASCII/Text on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-white rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};