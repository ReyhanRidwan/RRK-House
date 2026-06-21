import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Check, 
  Star, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Layers, 
  Home, 
  Grid, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
  Construction,
  Hammer,
  BadgeAlert,
  ArrowUp,
  Award
} from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import PortfolioGallery from './components/PortfolioGallery.tsx';
import ConsultationModal from './components/ConsultationModal.tsx';
import { HERO_DATA, SERVICES_DATA, ADVANTAGES_DATA, TESTIMONIALS_DATA, SERVICE_AREAS, FAQ_DATA } from './data.ts';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initial entrance loading simulator
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenModal = (serviceName: string = "") => {
    setSelectedServiceForModal(serviceName);
    setIsModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to map services to modern icons
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Layers className="w-6 h-6 text-gold-500" />;
      case 1: return <Home className="w-6 h-6 text-gold-500" />;
      case 2: return <Hammer className="w-6 h-6 text-gold-500" />;
      case 3: return <Grid className="w-6 h-6 text-gold-500" />;
      case 4: return <Sparkles className="w-6 h-6 text-gold-500" />;
      case 5: return <Construction className="w-6 h-6 text-gold-500" />;
      case 6: return <FileText className="w-6 h-6 text-gold-500" />;
      default: return <Award className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-gray-100 selection:bg-gold-500 selection:text-charcoal-950 relative">
      
      {/* 1. LUXURY ENTRANCE PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-charcoal-950 z-50 flex flex-col items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-[0.25em] text-white font-display uppercase">
                RRK HOUSE <span className="text-gold-500 font-mono">◆</span>
              </h2>
              <p className="text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mt-2">
                Architectural Builder & Contractor
              </p>
              
              <div className="w-32 h-[1px] bg-charcoal-800 mx-auto mt-6 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute h-full w-12 bg-gold-500"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. STICKY NAVBAR */}
      <Navbar onOpenConsultation={() => handleOpenModal()} />

      {/* 3. HERO SECTION (With generated luxury house background) */}
      <header id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Full screen background with darken overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_DATA.background}
            alt="RRK House Luxury Project background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_25s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text blocks */}
            <div className="lg:col-span-8 text-left space-y-6">
              
              {/* Premium Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-900/25 backdrop-blur-md"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gold-200 uppercase">
                  {HERO_DATA.subtitle}
                </span>
              </motion.div>

              {/* Company Logo Display */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]"
              >
                {HERO_DATA.title}
              </motion.h1>

              {/* Core Catchy Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-500 to-gold-700"
              >
                {HERO_DATA.headline}
              </motion.h2>

              {/* Conversational marketing copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed"
              >
                {HERO_DATA.description}
              </motion.p>

              {/* Primary call to actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <button
                  onClick={() => handleOpenModal()}
                  className="py-4 px-8 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest bg-gold-500 text-charcoal-950 hover:bg-gold-400 active:scale-95 transition-all shadow-xl shadow-gold-500/10 hover:shadow-gold-500/25 cursor-pointer flex items-center gap-2"
                >
                  <Clock size={16} />
                  Konsultasi Gratis
                </button>

                <a
                  href={HERO_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/10 hover:bg-white/15 text-white active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-white/20"
                >
                  <MessageSquare size={16} className="text-green-400 animate-pulse" />
                  Hubungi via WhatsApp
                </a>
              </motion.div>

              {/* Multi metrics section indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg"
              >
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">100%</h4>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Sertifikasi Legal</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">15+</h4>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Tahun Pengalaman</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">RAPI</h4>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Garansi Terjamin</p>
                </div>
              </motion.div>
            </div>

            {/* Right side teaser box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="glass-premium p-6 rounded-2xl border border-gold-500/20 text-left space-y-4 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
                <h3 className="text-lg font-bold font-display text-gold-200">✨ Penawaran Promo Terbatas</h3>
                <p className="text-xs text-gray-300">
                  Nikmati layanan bebas biaya Survei Lokasi & Penghitungan RAB Detail secara transparan khusus wilayah Banten, Tangerang, dan sekitarnya.
                </p>
                <div className="py-2.5 px-3 bg-charcoal-950/80 rounded-lg border border-charcoal-800">
                  <span className="text-[10px] text-gray-400 block uppercase">Telepon Kantor</span>
                  <span className="text-sm font-mono font-bold text-white tracking-wider">{HERO_DATA.phone}</span>
                </div>
                <button
                  onClick={() => handleOpenModal()}
                  className="w-full py-3 rounded-xl bg-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition"
                >
                  Klaim Bebas Survei Sekarang
                </button>
              </div>
            </motion.div>
            
          </div>
        </div>
      </header>

      {/* 4. SECTION LAYANAN */}
      <section id="layanan" className="py-24 bg-charcoal-950 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Section title header */}
          <div className="max-w-3xl mx-auto space-y-4 mb-20 text-center">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500">Layanan Terbaik Kami</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Satu Solusi Untuk Seluruh Kebutuhan Konstruksi Anda
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
            <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
              Mulai dari konsultasi konsep rancangan hingga serah terima kunci bangunan. Kami melayani dengan ketepatan struktural murni dan keindahan estetika luar biasa.
            </p>
          </div>

          {/* Cards container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                className="group flex flex-col h-full bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden hover:border-gold-500/35 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/5 hover:-translate-y-1.5"
              >
                {/* 4:3 Image ratio with no-referrer policy */}
                <div className="relative h-48 overflow-hidden bg-charcoal-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-60" />
                  
                  {/* Floating index icon overlay */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-charcoal-950/80 backdrop-blur-md border border-white/10 z-10">
                    {getServiceIcon(index)}
                  </div>
                </div>

                {/* Body details */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-gold-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Immediate Lead CTAs */}
                  <button
                    onClick={() => handleOpenModal(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-charcoal-950 group-hover:bg-gold-500 text-gold-500 group-hover:text-charcoal-950 border border-gold-500/25 group-hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                  >
                    Minta Penawaran
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION KEUNGGULAN (checklist layout) */}
      <section id="keunggulan" className="py-24 bg-charcoal-900 relative scroll-mt-20 border-t border-b border-charcoal-800">
        <div className="absolute inset-0 bg-dark-gradient opacity-40 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column static badge / title */}
            <div className="lg:col-span-4 text-left space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500">Nilai & Dedikasi</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
                Mengapa Memilih RRK House?
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-4" />
              <p className="text-sm text-gray-400 leading-relaxed mt-4">
                Kami percaya hunian adalah tempat kemurnian mimpi terwujud. Layanan arsitektur dan kontraktor kami dirancang untuk menghadirkan kualitas bangunan kelas utama dengan ketahanan puluhan tahun.
              </p>
              
              <div className="pt-6">
                <button
                  onClick={() => handleOpenModal("General Service Inquiry")}
                  className="inline-flex py-3 px-6 rounded-xl text-xs font-bold bg-gold-500 text-charcoal-950 uppercase tracking-widest hover:bg-gold-400 transition"
                >
                  Hubungi Kami Sekarang
                </button>
              </div>
            </div>

            {/* Right Column checklist elements */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {ADVANTAGES_DATA.map((adv) => (
                  <div
                    key={adv.id}
                    className="p-6 rounded-2xl bg-charcoal-950 border border-charcoal-850 hover:border-gold-500/15 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* Checked visual badge */}
                      <span className="p-2 rounded-lg bg-gold-500/10 text-gold-500 shrink-0">
                        <Check size={18} className="stroke-[3px]" />
                      </span>
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold font-display text-white tracking-tight">{adv.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{adv.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECTION PORTFOLIO / GALERI (With masonry and details lightbox) */}
      <section id="portfolio" className="py-24 bg-charcoal-950 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Section header */}
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500">Katalog Karya Terpilih</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Galeri Proyek Eksklusif RRK House
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              Visualisasikan hunian idaman Anda berdasarkan pengerjaan arsitektur nyata kami. Semua gambar bersumber dari tim pengawasan lapangan kami di berbagai kawasan Indonesia.
            </p>
          </div>

          {/* Interactive filter and grid component */}
          <PortfolioGallery />

        </div>
      </section>

      {/* 7. SECTION AREA LAYANAN (peta visual list) */}
      <section id="area" className="py-24 bg-charcoal-900 relative scroll-mt-20 border-t border-b border-charcoal-800">
        <div className="absolute inset-0 bg-dark-gradient opacity-30 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500">Jangkauan Kerja</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Wilayah Operasional Layanan
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Tim lapangan RRK House siap diterjunkan langsung ke lokasi tanah atau properti Anda di seluruh wilayah strategis berikut dengan estimasi waktu survei cepat.
            </p>
          </div>

          {/* Service geographic cards alignment */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all border ${
                  area.isMain
                    ? 'bg-gold-500/5 border-gold-500/25 text-white scale-102 shadow-lg hover:border-gold-500/60'
                    : 'bg-charcoal-950 border-charcoal-800 text-gray-300 hover:border-gold-500/10'
                }`}
              >
                <div className="p-2.5 rounded-full bg-gold-500/10 text-gold-500 mb-3 shrink-0">
                  <MapPin size={20} className="animate-bounce" />
                </div>
                <h4 className="text-base font-bold font-display tracking-tight text-center">
                  {area.name}
                </h4>
                {area.isMain && (
                  <span className="text-[9px] uppercase tracking-wider font-extrabold bg-gold-500 text-charcoal-950 px-2 py-0.5 rounded-full mt-2">
                    Layanan Utama
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 rounded-2xl bg-charcoal-950/80 border border-charcoal-800 max-w-2xl mx-auto inline-flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="p-3 rounded-full bg-gold-500/10 text-gold-500 shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white font-display">Lokasi Anda tidak terdaftar di atas?</h5>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                Silakan hubungi WhatsApp Advisor kami untuk konfirmasi ketersediaan pengiriman tim ahli survei kami ke luar daerah.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SECTION TESTIMONI (premium ratings) */}
      <section id="testimoni" className="py-24 bg-charcoal-950 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500">Kata Klien Kami</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Kepuasan Teruji Dari Pemilik Hunian
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Dengarkan penuturan jujur dari customer lokal kami mengenai pengalaman membangun rumah komersial ruko atau tempat tinggal premium berasarkan kerja sama aseli dengan RRK House.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((test) => (
              <div
                key={test.id}
                className="p-6 md:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/10 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  {/* Comments */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic text-left">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-charcoal-850 flex items-center gap-4 text-left">
                  {/* Icon profile avatar fallback inside styled frame */}
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 border border-gold-500/20 flex items-center justify-center font-bold text-sm shrink-0">
                    {test.name.charAt(0) === 'B' ? '🤵' : '👩'}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white font-display leading-none">{test.name}</h5>
                    <span className="text-[10px] text-gold-500/85 block mt-2 font-mono uppercase tracking-wide">
                      {test.role} • {test.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. SECTION FAQS */}
      <section id="faq" className="py-24 bg-charcoal-900 scroll-mt-20 border-t border-b border-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500">Tanya Jawab Umum</span>
            <h2 className="text-3xl font-extrabold tracking-tight font-display text-white">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-4 text-left">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-charcoal-950 border border-charcoal-850 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus:text-gold-500"
                  >
                    <span className="text-sm md:text-base font-bold text-white pr-4">
                      {faq.q}
                    </span>
                    <span className="shrink-0 p-1 rounded bg-charcoal-900 text-gold-500 border border-charcoal-800">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-charcoal-850 bg-charcoal-950/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. SECTION PROMO BANNER */}
      <section className="py-16 bg-charcoal-950 text-center relative overflow-hidden">
        {/* Dynamic decorative backdrop circles */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="glass-premium p-8 md:p-12 rounded-3xl border border-gold-500/25 space-y-6">
            <span className="text-2xl sm:text-3xl">🎉</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-display text-white italic">
              "Konsultasi & Survei GRATIS untuk wilayah Banten dan sekitarnya."
            </h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              Hubungi layanan tanggap responsif kami sekarang juga untuk menjadwalkan kunjungan tim lapangan ke lokasi Anda tanpa pungutan biaya apa pun.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={HERO_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-widest bg-gold-500 text-charcoal-950 hover:bg-gold-400 active:scale-95 transition flex items-center gap-2"
              >
                <MessageSquare size={14} />
                Hubungi Sekarang
              </a>
              <span className="text-sm font-mono text-gold-500 font-bold block sm:inline">
                📞 0859-5947-5373
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SECTION CTA AKHIR */}
      <section className="py-24 bg-charcoal-900 border-t border-charcoal-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-gold-500 block">Jadikan Rumah Impian Menjadi Nyata</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
            Membangun Kualitas,<br />Mewujudkan Hunian Impian.
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
            Percayakan rancangan masa depan hunian berkelas Anda hanya bersama tim pengawas lapangan, arsitek, dan kontraktor berpengalaman dari RRK House.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenModal("Grand CTA Inquiry")}
              className="w-full sm:w-auto py-4 px-8 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest bg-gold-500 text-charcoal-950 hover:bg-gold-400 transition"
            >
              Konsultasi Gratis Sekarang
            </button>
            <a
              href={HERO_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest bg-charcoal-950 border border-charcoal-700 hover:bg-charcoal-900 transition flex items-center justify-center gap-2 text-white"
            >
              <MessageSquare size={16} className="text-green-400" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-charcoal-950 border-t border-charcoal-900 pt-16 pb-12 text-left relative z-10 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-charcoal-900">
            
            {/* Logo and metadata desc */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-white tracking-widest">
                RRK HOUSE <span className="text-gold-500">◆</span>
              </h3>
              <p className="leading-relaxed text-gray-400 max-w-sm">
                Perusahaan kontraktor sipil dan biro arsitektur modern berkelas yang didukung tim ahli berdedikasi tinggi membangun rumah dari nol, renovasi dak tingkat, dan detail marmer premium.
              </p>
              <span className="text-[10px] text-gray-500 block uppercase font-mono tracking-widest mt-4">
                © {new Date().getFullYear()} RRK HOUSE. All rights reserved.
              </span>
            </div>

            {/* Address location block */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-gold-500">Alamat Kantor</h4>
              <p className="leading-relaxed text-white">
                Citra Maja City Cluster Cendana B29 No.05, Banten, Indonesia
              </p>
              <p className="leading-relaxed text-gray-400 mt-2">
                DKI Jakarta, Jawa Barat, Banten dan sekitarnya.
              </p>
            </div>

            {/* Contacts list */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-gold-500">Hubungi Konsultasi</h4>
              <ul className="space-y-2.5 text-white">
                <li className="flex items-center gap-2">
                  <span className="text-gold-500 font-mono">TEL:</span>
                  <a href={`tel:${HERO_DATA.phone.replace(/[^0-9]/g, '')}`} className="hover:text-gold-500">
                    {HERO_DATA.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500 font-mono">WA:</span>
                  <a href={HERO_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 underline">
                    Hubungi Chat WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-500 font-mono">Buka:</span>
                  <span className="text-gray-400">Senin - Sabtu (08.00 - 18.00 WIB)</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[10px]">
            <p>Optimized for Google Search Index (SEO friendly) • Secure Iframe Access Only</p>
            <div className="flex gap-4">
              <span className="hover:text-gold-500 cursor-pointer">Syarat & Ketentuan</span>
              <span>•</span>
              <span className="hover:text-gold-500 cursor-pointer">Kebijakan Privasi</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 13. FLOATING WHATSAPP LEAD BUTTON */}
      <a
        href={HERO_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-green-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-white/20 group cursor-pointer"
        aria-label="Direct WhatsApp Chat"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-2 leading-none block whitespace-nowrap">
          Konsultasi WA
        </span>
        <MessageSquare size={22} className="stroke-[2.5px] ml-1 shrink-0" />
      </a>

      {/* 14. FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-charcoal-900 border border-gold-550 border-gold-500/20 text-gold-500 p-3.5 rounded-full shadow-2xl hover:text-white hover:bg-gold-500 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Scroll ke atas"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 15. MODAL FORM DIALOG */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedServiceForModal}
      />

    </div>
  );
}
