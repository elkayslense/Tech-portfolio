import { Heart, Github, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
    { icon: Instagram, href: personalInfo.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white opacity-10" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#home" className="inline-block mb-6">
                <span className="text-2xl font-bold text-gradient">
                  {personalInfo.fullName.split(' ')[0]}
                  <span className="text-white">.</span>
                </span>
              </a>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                {personalInfo.title}. Building secure, scalable web solutions 
                with creative precision. Let's create something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">📞</span>
                    {personalInfo.phone}
                  </a>
                </li>
                <li className="text-slate-400 text-sm flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">📍</span>
                  {personalInfo.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-slate-500 text-sm flex items-center gap-1">
                © {currentYear} {personalInfo.fullName}. Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
                and lots of coffee.
              </p>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                Back to top
                <span className="w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                  <ArrowUp className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
