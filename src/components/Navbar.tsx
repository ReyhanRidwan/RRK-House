import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters on scroll
      const sections = ['home', 'layanan', 'keunggulan', 'portfolio', 'area', 'testimoni', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", target: "home" },
    { label: "Layanan", target: "layanan" },
    { label: "Keunggulan", target: "keunggulan" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Area Kerja", target: "area" },
    { label: "Testimoni", target: "testimoni" },
    { label: "FAQ", target: "faq" }
  ];

  const handleScrollTo = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="navbar-main"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-premium py-3 shadow-lg border-b border-gold-500/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleScrollTo('home')} 
              className="flex items-center gap-2 group cursor-pointer text-left"
            >
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold tracking-widest font-display text-white flex items-center gap-1.5 leading-none">
                  RRK HOUSE <span className="text-gold-500 animate-pulse text-xs">◆</span>
                </span>
                <span className="text-[9px] md:text-[10px] tracking-widest text-gold-500 font-medium mt-0.5 uppercase">
                  Architect & Contractor
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleScrollTo(item.target)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all hover:text-gold-500 relative py-1.5 cursor-pointer ${
                    activeSection === item.target ? 'text-gold-500' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA action button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="py-2.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-450 hover:bg-gold-500 text-charcoal-950 transition-all shadow-md shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck size={14} />
                Konsultasi Gratis
              </button>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-gold-500 bg-charcoal-900/50 rounded-lg hover:bg-charcoal-800 transition"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-charcoal-900 border-b border-gold-500/20 shadow-2xl overflow-hidden glass-premium"
            >
              <div className="px-5 pt-3 pb-6 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => handleScrollTo(item.target)}
                    className={`block w-full text-left py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all ${
                      activeSection === item.target
                        ? 'bg-gold-500/10 text-gold-500 border-l-2 border-gold-500'
                        : 'text-gray-300 hover:bg-charcoal-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-charcoal-800 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest bg-gold-500 text-charcoal-950 hover:bg-gold-400 font-display transition shadow-lg shadow-gold-500/10"
                  >
                    Konsultasi Gratis Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
