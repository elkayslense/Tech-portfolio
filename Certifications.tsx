import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
      id="certifications"
      ref={ref}
      className="relative py-24 lg:py-32 bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional certifications validating my expertise and commitment to continuous learning
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-slate-400 text-sm">{cert.issuer}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium flex-shrink-0">
                        {cert.date}
                      </span>
                    </div>

                    {cert.credentialId && (
                      <p className="text-slate-500 text-xs mt-2 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    )}

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm mt-4 transition-colors"
                      >
                        Verify Credential
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Additional Achievements
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Hackathon Winner',
                description: '1st place at ABU Tech Hackathon 2023',
                icon: CheckCircle,
              },
              {
                title: 'Open Source Contributor',
                description: 'Active contributor to 5+ open source projects',
                icon: CheckCircle,
              },
              {
                title: 'Tech Community Leader',
                description: 'Organized 10+ tech meetups and workshops',
                icon: CheckCircle,
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <achievement.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-medium mb-1">{achievement.title}</h4>
                <p className="text-slate-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
