export type Quote = {
  text: string;
  author: string;
  book: string;
};

export const quotes: Quote[] = [
  {
    text: "Bir kitap, içimizdeki donmuş denizi kıran bir balta olmalıdır.",
    author: "Franz Kafka",
    book: "Mektuplar",
  },
  {
    text: "İnsan, okudukça yalnızlığın da bir arkadaşı olduğunu öğrenir.",
    author: "Sabahattin Ali",
    book: "Kürk Mantolu Madonna",
  },
  {
    text: "Hayatta en hakiki mürşit ilimdir; kitap ise onun en sabırlı öğretmeni.",
    author: "Halide Edib Adıvar",
    book: "Mor Salkımlı Ev",
  },
  {
    text: "Okumak, başkasının kafasıyla değil, başkasının gözleriyle görmektir.",
    author: "Oğuz Atay",
    book: "Tutunamayanlar",
  },
  {
    text: "Kelimeler kanat olur, sayfalar gökyüzü.",
    author: "Nâzım Hikmet",
    book: "Şiirler",
  },
  {
    text: "Bir şehri tanımak istiyorsan kitapçılarına bak.",
    author: "Ahmet Hamdi Tanpınar",
    book: "Beş Şehir",
  },
  {
    text: "Her kitap, bir başkasının hayatına açılan sessiz bir kapıdır.",
    author: "Virginia Woolf",
    book: "Kendine Ait Bir Oda",
  },
];

/** Deterministic pick so server and client render the same quote. */
export function quoteOfTheDay(date = new Date()): Quote {
  const day = Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 86400000);
  return quotes[day % quotes.length]!;
}
