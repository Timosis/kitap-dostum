export type Club = {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  members: number;
  cadence: string;
  genre: string;
  currentBook: { title: string; author: string; progress: number };
  nextMeeting: { date: string; time: string; place: string };
  spine: string;
};

export const clubs: Club[] = [
  {
    slug: "gece-kutuphanesi",
    name: "Gece Kütüphanesi",
    tagline: "Ay ışığında modern klasikler okuyan sakin bir topluluk.",
    city: "İstanbul · Kadıköy",
    members: 24,
    cadence: "İki haftada bir, Çarşamba",
    genre: "Modern Klasik",
    currentBook: { title: "Tutunamayanlar", author: "Oğuz Atay", progress: 62 },
    nextMeeting: { date: "27 Ağustos", time: "19:30", place: "Moda Sahil Kahvesi" },
    spine: "oklch(0.38 0.055 152)",
  },
  {
    slug: "kirmizi-defter",
    name: "Kırmızı Defter",
    tagline: "Her ay bir polisiye, her buluşmada yeni bir şüpheli.",
    city: "Ankara · Kızılay",
    members: 18,
    cadence: "Ayda bir, Cumartesi",
    genre: "Polisiye",
    currentBook: { title: "Şibumi", author: "Trevanian", progress: 35 },
    nextMeeting: { date: "5 Eylül", time: "15:00", place: "Kitapevi Pasajı" },
    spine: "oklch(0.52 0.13 40)",
  },
  {
    slug: "deniz-feneri",
    name: "Deniz Feneri",
    tagline: "Şiir ve deneme okuyan, sesli okumayı seven küçük bir çevre.",
    city: "İzmir · Alsancak",
    members: 12,
    cadence: "Her Pazar",
    genre: "Şiir & Deneme",
    currentBook: { title: "Karanlıkta Kalanlar", author: "Edip Cansever", progress: 80 },
    nextMeeting: { date: "23 Ağustos", time: "11:00", place: "Kordon Kütüphanesi" },
    spine: "oklch(0.72 0.11 78)",
  },
  {
    slug: "yildiz-tozu",
    name: "Yıldız Tozu",
    tagline: "Bilimkurgu ve fantastik evrenlerde kaybolanlar için.",
    city: "Çevrimiçi",
    members: 41,
    cadence: "İki haftada bir, Perşembe",
    genre: "Bilimkurgu",
    currentBook: { title: "Dune", author: "Frank Herbert", progress: 48 },
    nextMeeting: { date: "28 Ağustos", time: "21:00", place: "Video görüşme" },
    spine: "oklch(0.45 0.08 265)",
  },
  {
    slug: "sabah-sayfalari",
    name: "Sabah Sayfaları",
    tagline: "Güne kahve ve kısa öykülerle başlayan erkenciler kulübü.",
    city: "Bursa · Nilüfer",
    members: 15,
    cadence: "Her Cumartesi, 09:00",
    genre: "Öykü",
    currentBook: { title: "Yaşasın Edebiyat", author: "Sait Faik", progress: 22 },
    nextMeeting: { date: "22 Ağustos", time: "09:00", place: "Nilüfer Kahvecisi" },
    spine: "oklch(0.62 0.09 30)",
  },
  {
    slug: "arsiv-odasi",
    name: "Arşiv Odası",
    tagline: "Tarih ve biyografi meraklılarının uzun sohbetli buluşmaları.",
    city: "İstanbul · Beyoğlu",
    members: 29,
    cadence: "Ayda bir, Pazar",
    genre: "Tarih",
    currentBook: { title: "Sapiens", author: "Yuval Noah Harari", progress: 55 },
    nextMeeting: { date: "31 Ağustos", time: "16:00", place: "Beyoğlu Kültür Evi" },
    spine: "oklch(0.42 0.05 200)",
  },
];

export const meetings = clubs
  .map((c) => ({
    club: c.name,
    slug: c.slug,
    book: c.currentBook.title,
    ...c.nextMeeting,
  }))
  .sort((a, b) => a.date.localeCompare(b.date));
