import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Lightbulb, CheckCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects, personalInfo } from '@/data/portfolio';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'webdev', label: 'Web Development' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'fullstack', label: 'Full-Stack' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 lg:py-32 bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects That <span className="text-gradient">Define Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world applications built with attention to security, performance, and user experience
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
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-glow-purple'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-purple-500/30 hover:text-purple-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={activeCategory}
          className="grid lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-cyan-400">
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 text-xs capitalize">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Expandable Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedProject === project.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-6 pt-4 border-t border-slate-700/50">
                      {/* Problem Statement */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <Target className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-red-400 mb-2">Problem Statement</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {project.problemStatement}
                          </p>
                        </div>
                      </div>

                      {/* Solution Approach */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution Approach</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {project.solutionApproach}
                          </p>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2">Outcome & Impact</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="mt-6 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    {expandedProject === project.id ? 'Show Less' : 'Read Full Case Study'}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        expandedProject === project.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.article>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
            asChild
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
