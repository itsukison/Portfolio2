import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectData {
  id: number;
  name: string;
  title: string;
  description: string;
  year: string;
  url: string;
  images: string[];
  tags: string[];
}

const baseProjects = [
  {
    id: 1,
    year: "2025",
    url: "https://www.hearsay.ink/",
    images: ["/hearsay1.png", "/hearsay2.png", "/hearsay3.png", "/hearsay4.png"],
    tags: ["Social", "Mobile", "React Native"]
  },
  {
    id: 2,
    year: "2025",
    url: "https://crm-five-lyart.vercel.app/",
    images: ["/flowly.png", "/flowly2.png", "/flowly3.png", "/flowly4.png"],
    tags: ["CRM", "Web", "Next.js"]
  },
  {
    id: 3,
    year: "2024",
    url: "https://www.cueme.ink/",
    images: ["/cueme1.png", "/cueme2.png", "/cueme3.png"],
    tags: ["AI", "Web", "Next.js"]
  }
];

export const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { t } = useLanguage();

  // Merge base project data with translations
  const projects: ProjectData[] = baseProjects.map((project, index) => ({
    ...project,
    name: t.projects.items[index]?.name || '',
    title: t.projects.items[index]?.title || '',
    description: t.projects.items[index]?.description || '',
  }));

  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>(
    projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
  );

  // Auto-rotate images for each project (pauses on hover)
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    projects.forEach((project) => {
      const interval = setInterval(() => {
        // Only rotate if not hovering over this project
        if (hoveredProject !== project.id) {
          setCurrentImageIndices((prev) => ({
            ...prev,
            [project.id]: (prev[project.id] + 1) % project.images.length
          }));
        }
      }, 5000); // Change image every 5 seconds

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [hoveredProject]);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-off-white pb-48 md:pb-32 pt-20 min-h-0 md:min-h-screen mt-0 md:mt-12">
      <div className="container mx-auto px-6">

        {/* Header Row */}
        <div className="grid grid-cols-12 gap-4 mb-8 font-mono text-xs uppercase opacity-50 border-b border-black/10 pb-2">
          <div className="col-span-12 md:col-span-4">{t.projects.headerProject}</div>
          <div className="col-span-12 md:col-span-4">{t.projects.headerDescription}</div>
          <div className="col-span-12 md:col-span-4 text-right">{t.projects.headerYear}</div>
        </div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.url)}
              className="group cursor-pointer"
            >
              {/* Text Info */}
              <div className="grid grid-cols-12 gap-4 mb-6 relative z-10">
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-serif text-3xl md:text-5xl mb-2 group-hover:italic transition-all duration-300">
                    {project.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="font-sans text-xl md:text-2xl font-medium leading-tight">
                    {project.title}
                  </div>
                  <p className="font-mono text-xs mt-4 max-w-xs opacity-60">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-1 bg-black/5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 text-right">
                  <span className="font-mono text-xl">{project.year}</span>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative overflow-hidden w-full max-w-5xl mx-auto bg-gray-100 rounded-lg p-4 md:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${project.id}-${currentImageIndices[project.id]}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full"
                  >
                    <motion.div
                      className="w-full h-full max-w-5xl mx-auto"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    >
                      <img
                        src={project.images[currentImageIndices[project.id]]}
                        alt={`${project.name} - View ${currentImageIndices[project.id] + 1}`}
                        className="w-full h-auto object-contain transition-all duration-700 rounded-lg"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndices((prev) => ({
                          ...prev,
                          [project.id]: index
                        }));
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndices[project.id] === index
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                        }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Overlay with Arrow on Hover */}
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