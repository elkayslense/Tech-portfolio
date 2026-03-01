import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Shield, Camera, Rocket } from 'lucide-react';
import { aboutMe } from '@/data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'MERN stack specialist crafting scalable, performant applications',
      color: 'cyan',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security-first mindset with OWASP and penetration testing expertise',
      color: 'purple',
    },
    {
      icon: Camera,
      title: 'Creative Vision',
      description: 'Photography and design awareness for compelling user experiences',
      color: 'pink',
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'Continuously learning emerging technologies and best practices',
      color: 'orange',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Person Behind the <span className="text-gradient">Code</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passionate technologist combining creativity with technical excellence
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-6">
                {aboutMe.intro}
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                {aboutMe.passion}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Development Philosophy
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {aboutMe.webDev}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security-First Approach
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {aboutMe.cybersecurity}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - More About Me */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Creative Perspective
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {aboutMe.creative}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Continuous Growth
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {aboutMe.growth}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-8 border-l-4 border-l-cyan-500">
              <h3 className="text-lg font-semibold text-white mb-3">Career Goals</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {aboutMe.careerGoals}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-6 h-6 text-${item.color}-400`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 italic max-w-3xl mx-auto">
            &ldquo;{aboutMe.closing}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
