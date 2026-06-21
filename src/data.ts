import { ServiceItem, PortfolioItem, TestimonialItem, ServiceArea } from './types.ts';

export const HERO_DATA = {
  title: "RRK HOUSE | ARCHITECT & CONTRACTOR",
  subtitle: "DESAIN • BANGUN • RENOVASI RUMAH PROFESIONAL",
  headline: "Wujudkan Rumah Impian Anda Bersama RRK House",
  description: "Melayani jasa desain rumah, bangun rumah baru, renovasi rumah, interior rumah, pemasangan marmer, pagar precast, kanopi, carport, dan berbagai pekerjaan konstruksi dengan kualitas terbaik, pengerjaan rapi, serta harga kompetitif.",
  background: "/images/hero_home_mewah_1782039979838.jpg",
  phone: "0859-5947-5373",
  whatsappUrl: "https://wa.me/6285959475373?text=Halo%2520RRK%2520House%252C%2520saya%2520tertarik%2520untuk%2520berkonsultasi%2520mengenai%2520proyek%2520pembangunan%252Frenovasi%2520rumah."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Desain Arsitektur Modern",
    description: "Perancangan denah, fasad 3D, gambar kerja (DED), hingga visualisasi mewah yang estetik dan fungsional sesuai tren arsitektur terkini.",
    image: "/images/service_design_1782039997002.jpg"
  },
  {
    id: "serv-2",
    title: "Bangun Rumah Baru",
    description: "Layanan konstruksi dari nol (land clearing, pondasi, struktur, hingga serah terima kunci) dengan pengawasan tim ahli terpercaya.",
    image: "/images/service_bangun_1782040013625.jpg"
  },
  {
    id: "serv-3",
    title: "Renovasi Rumah Total & Parsial",
    description: "Peremajaan ruang, penambahan lantai (dak), pengecatan ulang, hingga pengerjaan perbaikan atap bocor atau retak dinding.",
    image: "/images/service_renovasi_1782040029127.jpg"
  },
  {
    id: "serv-4",
    title: "Pemasangan Marmer & Granit",
    description: "Instalasi marmer/granit kualitas premium pada lantai, dinding aksen, pilar, atau kitchen countertop dengan sambungan nat super rapi.",
    image: "/images/service_marmer_1782040047061.jpg"
  },
  {
    id: "serv-5",
    title: "Interior & Finishing Premium",
    description: "Pembuatan kitchen set, backdrop TV, wardrobe, plafon drop ceiling, serta wall moulding dengan hasil akhir mewah nan presisi.",
    image: "/images/service_interior_1782040061341.jpg"
  },
  {
    id: "serv-6",
    title: "Pagar Precast Beton",
    description: "Pemasangan pagar beton precast knockdown untuk keamanan lingkungan, lahan, atau kawasan industri dengan pengerjaan yang cepat.",
    image: "/images/service_fence_1782040182659.jpg"
  },
  {
    id: "serv-7",
    title: "Kanopi Baja Ringan & Besi",
    description: "Pembuatan struktur kanopi minimalis modern dengan opsi atap alderon, polycarbonate, tempered glass, untuk carport yang teduh.",
    image: "/images/service_canopy_1782040200207.jpg"
  },
  {
    id: "serv-8",
    title: "Survei & Konsultasi Gratis",
    description: "Layanan peninjauan lokasi proyek secara langsung, pengukuran presisi, dan diskusi skema anggaran biaya (RAB) tanpa dipungut biaya.",
    image: "/images/service_consultation_1782040216253.jpg"
  }
];

export const ADVANTAGES_DATA = [
  {
    id: "adv-1",
    title: "Tim Berpengalaman",
    desc: "Arsitek, kontraktor, dan tukang ahli bersertifikasi yang berdedikasi membangun mahakarya arsitektur kokoh berkualitas tinggi."
  },
  {
    id: "adv-2",
    title: "Material Berkualitas",
    desc: "Pilihan batu alam, besi, semen, baja ringan, cat, dan kayu premium berstandar nasional (SNI) untuk ketahanan jangka panjang."
  },
  {
    id: "adv-3",
    title: "Pengerjaan Tepat Waktu",
    desc: "Metode manajemen konstruksi modern dan pengawasan terjadwal ketat guna memastikan proyek selesai sesuai komitmen waktu."
  },
  {
    id: "adv-4",
    title: "Bergaransi",
    desc: "Kami memberikan garansi pemeliharaan tertulis pasca-konstruksi sebagai bukti tanggung jawab mutlak kami atas kualitas pengerjaan."
  },
  {
    id: "adv-5",
    title: "Harga Transparan",
    desc: "Penyusunan Rencana Anggaran Biaya (RAB) detail, rinci, dan transparan. Tidak ada pembengkakan biaya di tengah proyek berjalan."
  },
  {
    id: "adv-6",
    title: "Konsultasi Gratis",
    desc: "Layanan survei ke lokasi Anda dan sesi perencanaan arsitektur perdana diberikan sepenuhnya gratis untuk membantu kemudahan Anda."
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    title: "The Legacy Residence",
    subtitle: "Classic Modern Luxury House",
    category: "New Construction",
    image: "/images/portfolio_1_1782040081102.jpg"
  },
  {
    id: "port-2",
    title: "The Grand Columns Mansion",
    subtitle: "Modern Tropical Palace with White Pillars",
    category: "Architectural Design",
    image: "/images/portfolio_2_1782040094638.jpg"
  },
  {
    id: "port-3",
    title: "Serene Minimalist Estate",
    subtitle: "Geometric Modern Design with Clean Lines",
    category: "New Construction",
    image: "/images/portfolio_3_1782040113243.jpg"
  },
  {
    id: "port-4",
    title: "Modern Oasis Facade",
    subtitle: "Complete Renovation & Upgrade of Old facade",
    category: "Renovation",
    image: "/images/portfolio_4_1782040130344.jpg"
  },
  {
    id: "port-5",
    title: "Italian Statuario Dining Hall",
    subtitle: "Premium Statuario Marble Installation in Luxury Hall",
    category: "Marble & Finishings",
    image: "/images/portfolio_5_1782040147003.jpg"
  },
  {
    id: "port-6",
    title: "Opulent Living Complex",
    subtitle: "Contemporary Interior with Premium Gold Accent Finishings",
    category: "Interior Design",
    image: "/images/portfolio_6_1782040163100.jpg"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Bapak H. Hendra Wijaya",
    location: "BSD City, Tangerang",
    role: "Pemilik Rumah Tinggal",
    rating: 5,
    comment: "Kinerja tim RRK House sangat memuaskan. Renovasi total rumah kami di BSD selesai tepat waktu dengan hasil marmer yang sangat presisi dan sambungan rapi. Desain pilar klasiknya benar-benar menawan sesuai ekspetasi kami!"
  },
  {
    id: "test-2",
    name: "Ibu Amalia Siregar",
    location: "Kebayoran Baru, Jakarta Selatan",
    role: "Pemilik Rumah Tropis",
    rating: 5,
    comment: "Desain arsitektur modern yang dibuat sangat pas dengan impian keluarga kami yang berjiwa tropis minimalis. Pengerjaan rapi, komunikasi terjalin interaktif, dan RAB transparan di setiap item pekerjaan."
  },
  {
    id: "test-3",
    name: "Bapak Dr. Aditya Pratama",
    location: "Serang City, Banten",
    role: "Pemilik Hunian Baru 2 Lantai",
    rating: 5,
    comment: "Sangat profesional. Dari sejak survei awal, pembuatan rancangan 3D, hingga serah terima kunci semua berjalan lancar, bergaransi resmi, dan selesai lebih awal 2 minggu dari jadwal kontrak."
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Banten", isMain: true },
  { name: "Tangerang", isMain: true },
  { name: "Jakarta", isMain: true },
  { name: "Serang", isMain: false },
  { name: "Cilegon", isMain: false },
  { name: "Rangkasbitung", isMain: false },
  { name: "Maja", isMain: false },
  { name: "Seluruh Jabodetabek", isMain: true }
];

export const FAQ_DATA = [
  {
    q: "Apakah RRK House menyediakan jasa pengerjaan di luar Jabodetabek?",
    a: "Fokus utama kami adalah wilayah Banten, Tangerang, Jakarta, Serang, Cilegon, Rangkasbitung, Maja, dan Jabodetabek keseluruhan. Namun, kami juga melayani proyek besar di luar daerah tersebut sesuai kesepakatan bersama."
  },
  {
    q: "Bagaimana proses penjaminan garansi setelah proyek selesai?",
    a: "Setelah serah terima kunci (BAST), RRK House memberikan sertifikat jaminan kualitas berupa Garansi Pemeliharaan konstruksi selama 3 hingga 6 bulan untuk menjamin kepuasan klien atas kebocoran, keretakan, atau kendala struktur lainnya."
  },
  {
    q: "Berapa lama survei dan penyusunan RAB akan selesai?",
    a: "Survei gratis biasanya berlangsung 1 hari setelah jadwal dikonfirmasi. Estimasi pembuatan sketsa awal dan penghitungan volume Rencana Anggaran Biaya (RAB) transparan akan siap dalam 3-5 hari kerja."
  },
  {
    q: "Bagaimana jika material yang digunakan di tengah pengerjaan ingin diubah?",
    a: "Segala perubahan material di tengah jalan dapat dikoordinasikan secara tertulis melalui Berita Acara Perubahan Pekerjaan (CCO) untuk menjaga transparansi biaya dan menghindari kesalahpahaman."
  }
];
