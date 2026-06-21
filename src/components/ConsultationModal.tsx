import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { HERO_DATA, SERVICE_AREAS } from '../data.ts';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ConsultationModal({ isOpen, onClose, preselectedService = "" }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState(preselectedService || 'Bangun Rumah Baru');
  const [size, setSize] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location) {
      alert("Silakan isi Nama, Nomor WhatsApp, dan Lokasi Proyek terlebih dahulu.");
      return;
    }

    // Build perfect WhatsApp lead conversation template
    const textMessage = `Halo RRK House, saya *${name}* (${phone}).

Saya ingin mengajukan *KONSULTASI & SURVEI GRATIS* untuk proyek rumah impian saya:
- *Layanan:* ${serviceType}
- *Lokasi Proyek:* ${location}
- *Estimasi Ukuran Lahan/Bangunan:* ${size || '-'} m²
- *Keterangan Proyek:* ${notes || 'Kebutuhan umum sesuai survei.'}

Mohon hubungi saya untuk penjadwalan lebih lanjut. Terima kasih!`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/6285959475373?text=${encodedText}`;

    // Render success animation then open link
    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setIsSuccess(false);
      // Clean form
      setName('');
      setPhone('');
      setLocation('');
      setSize('');
      setNotes('');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-charcoal-900 border border-gold-500/20 text-gray-100 shadow-2xl z-10 p-6 md:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gold-500 hover:bg-charcoal-800 transition"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center mb-6 border border-gold-500 animate-pulse">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold font-display text-gold-500 mb-2">Formulir Terkirim!</h3>
                <p className="text-gray-400 max-w-xs text-sm mb-4">
                  Sistem akan mengarahkan Anda langsung ke WhatsApp Premium Advisor kami dalam beberapa detik.
                </p>
                <span className="text-xs text-gold-500/70 font-mono">Menghubungkan ke 0859-5947-5373...</span>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 text-gold-500">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-gray-100">Konsultasi & Survei Gratis</h3>
                    <p className="text-xs text-gray-400">Silakan isi formulir rencana renovasi atau bangun rumah</p>
                  </div>
                </div>

                <hr className="border-charcoal-800 mb-5" />

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Reyhan Ridwan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-sm py-2.5 px-3.5 rounded-lg bg-charcoal-950 border border-charcoal-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition outline-none text-gray-100"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">No. WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567xxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-sm py-2.5 px-3.5 rounded-lg bg-charcoal-950 border border-charcoal-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition outline-none text-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Lokasi Proyek *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Tangerang / Maja"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full text-sm py-2.5 px-3.5 rounded-lg bg-charcoal-950 border border-charcoal-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition outline-none text-gray-100"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Tipe Pekerjaan</label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full text-sm py-2.5 px-2.5 rounded-lg bg-charcoal-950 border border-charcoal-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition outline-none text-gray-100"
                      >
                        <option value="Bangun Rumah Baru">Bangun Rumah Baru</option>
                        <option value="Renovasi Rumah Total">Renovasi Rumah Total</option>
                        <option value="Desain Arsitektur Modern">Desain Arsitektur Modern</option>
                        <option value="Pemasangan Marmer & Granit">Pemasangan Marmer & Granit</option>
                        <option value="Interior & Finishing Premium">Interior & Finishing Premium</option>
                        <option value="Pagar Precast Beton">Pagar Precast Beton</option>
                        <option value="Kanopi Baja Ringan / Besi">Kanopi Baja Ringan & Besi</option>
                        <option value="Konsultasi Desain & Survei">Konsultasi Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Luas Lahan/Bangunan (m²)</label>
                      <input
                        type="number"
                        placeholder="Contoh: 120"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full text-sm py-2.5 px-3.5 rounded-lg bg-charcoal-950 border border-charcoal-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition outline-none text-gray-100"
                      />
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Deskripsi Singkat Keinginan Anda</label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan rencana Anda (contoh: bangun minimalis industrial 2 lantai, renovasi pilar klasik, dll)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-sm py-2 px-3 rounded-lg bg-charcoal-950 border border-charcoal-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition outline-none text-gray-100 resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl font-semibold bg-gold-500 text-charcoal-950 hover:bg-gold-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-gold-500/15 cursor-pointer"
                    >
                      <Phone size={16} />
                      Kirim via Chat WhatsApp
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                    <p className="text-[10px] text-center text-gray-500 mt-2">
                      ✔ Aman & Tanpa Iklan • Data dilindungi • Estimasi RAB Transparan
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
