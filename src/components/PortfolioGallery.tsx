import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Eye, ChevronLeft, ChevronRight, X, MessageSquare, Tag } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data.ts';

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Derive categories dynamically
  const categories = ['Semua', 'New Construction', 'Architectural Design', 'Renovation', 'Marble & Finishings', 'Interior Design'];

  const filteredItems = selectedCategory === 'Semua'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    // Find index in filtered list
    setActiveLightboxIndex(index);
    document.body.classList.add('lightbox-opened');
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.classList.remove('lightbox-opened');
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      const nextIndex = (activeLightboxIndex + 1) % filteredItems.length;
      setActiveLightboxIndex(nextIndex);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      const prevIndex = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveLightboxIndex(prevIndex);
    }
  };

  const handleInquire = () => {
    if (activeLightboxIndex !== null) {
      const item = filteredItems[activeLightboxIndex];
      const text = `Halo RRK House, saya tertarik dengan portofolio proyek: *${item.title}* (${item.subtitle}). Apakah bisa berkonsultasi mengenai pembangunan/biaya model rumah seperti ini?`;
      window.open(`https://wa.me/6285959475373?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3" id="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-full font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gold-500 text-charcoal-950 font-bold shadow-md shadow-gold-500/10'
                : 'bg-charcoal-900 text-gray-400 hover:text-white border border-charcoal-800'
            }`}
          >
            {cat === 'Semua' ? '🔴 Semua Proyek' : cat}
          </button>
        ))}
      </div>

      {/* Grid Portfolio */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-96 overflow-hidden rounded-2xl bg-charcoal-900 border border-charcoal-800 cursor-pointer shadow-lg hover:border-gold-500/35 transition-all duration-500"
            >
              {/* Background image component with no-referrer policy */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.8] group-hover:brightness-[0.6]"
              />

              {/* Bottom decorative gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Top tag info */}
              <div className="absolute top-4 left-4 z-10">
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-extrabold bg-[#0f0f11]/85 text-gold-500 px-3 py-1.5 rounded-full border border-gold-500/20 shadow-md">
                  <Tag size={10} />
                  {item.category}
                </span>
              </div>

              {/* Cover overlay metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-90" />

              {/* Text Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                <p className="text-xs text-gold-500/80 font-mono tracking-widest uppercase mb-1">{item.subtitle}</p>
                <h4 className="text-xl font-bold font-display text-white tracking-tight mb-2 group-hover:text-gold-500 transition-colors">
                  {item.title}
                </h4>
                
                {/* Visual action hint */}
                <div className="flex items-center gap-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="p-1 rounded-full bg-gold-500/20 text-gold-500">
                    <Eye size={12} />
                  </span>
                  <span>Klik untuk Zoom detail</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-charcoal-900 border border-gold-500/20 text-gray-100 shadow-2xl z-10 flex flex-col md:flex-row max-h-[85vh] md:max-h-[75vh]"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:text-gold-500 hover:bg-black/80 transition"
              >
                <X size={20} />
              </button>

              {/* Left / Prev controller (desktop) */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white hover:text-gold-500 hover:bg-black/70 transition"
                aria-label="Kembali"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right / Next controller (desktop) */}
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white hover:text-gold-500 hover:bg-black/70 transition"
                aria-label="Lanjut"
              >
                <ChevronRight size={24} />
              </button>

              {/* Left Side: Photo Frame */}
              <div className="w-full md:w-2/3 h-64 md:h-auto bg-black relative flex items-center justify-center">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover md:object-contain"
                />
              </div>

              {/* Right Side: Metadata Description */}
              <div className="w-full md:w-1/3 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-charcoal-800">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500 bg-gold-500/10 px-2.5 py-1 rounded">
                      {filteredItems[activeLightboxIndex].category}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white mt-3 leading-tight">
                      {filteredItems[activeLightboxIndex].title}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono tracking-wider mt-1 uppercase">
                      {filteredItems[activeLightboxIndex].subtitle}
                    </p>
                  </div>

                  <hr className="border-charcoal-800" />

                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      Konstruksi bangunan ini dikerjakan oleh tim ahli dengan standar struktural tinggi, menggunakan material premium pilihan dari RRK HOUSE.
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Lokasi dan rincian pembangunan rahasia demi privasi eksklusif klien kami.
                    </p>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button
                    onClick={handleInquire}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    Tanyakan Biaya Rumah Ini
                  </button>
                  <p className="text-[10px] text-center text-gray-500">
                    Buka chat WhatsApp • 100% Bebas biaya konsultasi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
