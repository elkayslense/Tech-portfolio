import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { techIcons } from '@/data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredIcons = activeCategory === 'all'
    ? techIcons
    : techIcons.filter(icon => icon.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 lg:py-32 bg-slate-950 dark:bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/3 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build secure, scalable applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-glow'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-cyan-500/30 hover:text-cyan-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        >
          {filteredIcons.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 cursor-default">
                {/* Tech Icon */}
                <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                {/* Tech Name */}
                <span className="text-slate-300 text-sm font-medium text-center group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid sm:grid-cols-4 gap-6"
        >
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-slate-400 text-sm">JavaScript/TypeScript</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-slate-400 text-sm">React Ecosystem</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>
            <div className="text-slate-400 text-sm">Security Practices</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
