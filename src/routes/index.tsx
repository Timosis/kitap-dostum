import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookMarked,
  CalendarDays,
  ChevronRight,
  MessagesSquare,
  Quote,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-kitap.jpg";
import { clubs, meetings } from "@/data/clubs";
import { quoteOfTheDay } from "@/data/quotes";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sayfa Arası — Kitap Kulübü Uygulaması" },
      {
        name: "description",
        content:
          "Kitap kulübünü kur, üyeleri davet et, okuma ilerlemesini takip et ve buluşmaları planla.",
      },
      { property: "og:title", content: "Sayfa Arası — Kitap Kulübü Uygulaması" },
      {
        property: "og:description",
        content:
          "Kitap kulüplerini keşfet, okuma ilerlemesini takip et ve buluşmaları planla.",
      },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Users, title: "Kulübünü kur", text: "Dakikalar içinde bir kulüp aç." },
  { icon: BookMarked, title: "İlerlemeyi izle", text: "Kim kaçıncı sayfada gör." },
  { icon: CalendarDays, title: "Buluşma planla", text: "Tarih, saat ve mekân paylaş." },
  { icon: MessagesSquare, title: "Bölüm tartış", text: "Notlar ve alıntılar düzenli." },
];

function Index() {
  const daily = quoteOfTheDay();

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <section className="card-paper relative overflow-hidden">
        <div className="relative">
          <img
            src={heroImage}
            alt="Kitap yığını, kahve ve okuma köşesi illüstrasyonu"
            width={1600}
            height={1008}
            className="h-44 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
          <span className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur">
            Bu hafta 6 buluşma
          </span>
        </div>
        <div className="-mt-3 p-5">
          <p className="text-eyebrow">Okuma kulüpleri için</p>
          <h1 className="mt-1.5 text-[2rem] leading-[1.1] font-semibold">
            Birlikte okumanın
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              {" "}
              en güzel hâli
            </span>
          </h1>
          <p className="mt-2.5 text-sm text-muted-foreground">
            Kulübünü kur, üyeleri bir arada tut, her buluşmayı zamanında planla.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/kulupler"
              className="press gradient-warm rounded-xl px-5 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_-14px_var(--color-primary)]"
            >
              Kulüpleri keşfet
            </Link>
            <Link
              to="/takvim"
              className="press rounded-xl border border-border bg-card px-5 py-3.5 text-center text-sm font-medium"
            >
              Buluşma takvimi
            </Link>
          </div>
        </div>
      </section>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["139", "okur"],
          [String(clubs.length), "kulüp"],
          ["24", "kitap"],
        ].map(([n, l]) => (
          <div key={l} className="card-paper px-3 py-3.5 text-center">
            <dt className="font-display text-2xl font-semibold text-primary">{n}</dt>
            <dd className="mt-0.5 text-[11px] tracking-wide text-muted-foreground uppercase">
              {l}
            </dd>
          </div>
        ))}
      </dl>

      <section className="card-paper relative mt-4 overflow-hidden p-5">
        <div className="gradient-warm absolute inset-y-0 left-0 w-1.5" />
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2">
          <Quote className="size-4 text-gold" />
          <p className="text-eyebrow">Günün alıntısı</p>
        </div>
        <blockquote className="mt-3 font-display text-lg leading-snug">
          “{daily.text}”
        </blockquote>
        <p className="mt-3 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{daily.author}</span> · {daily.book}
        </p>
      </section>



      <section className="mt-7">
        <h2 className="text-lg font-semibold">Kulübün için her şey</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {features.map((f) => (
            <div key={f.title} className="card-paper p-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary ring-1 ring-border/70">
                <f.icon className="size-4.5" />
              </span>
              <h3 className="mt-3 text-sm font-semibold">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="mt-7">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-2">
          <h2 className="truncate text-lg font-semibold">Öne çıkan kulüpler</h2>
          <Link to="/kulupler" className="shrink-0 text-sm text-primary">
            Tümü
          </Link>
        </div>
        <div className="mt-3 space-y-3">
          {clubs.slice(0, 3).map((club) => (
            <Link
              key={club.slug}
              to="/kulupler/$slug"
              params={{ slug: club.slug }}
              className="card-paper press flex overflow-hidden"
            >
              <div className="spine w-1.5 shrink-0" style={{ backgroundColor: club.spine }} />
              <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 p-4">
                <div className="min-w-0">
                  <span className="text-eyebrow">{club.genre}</span>
                  <h3 className="mt-1 truncate text-base font-semibold">{club.name}</h3>
                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {club.city} · {club.members} üye
                  </p>
                </div>
                <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="text-lg font-semibold">Bu haftaki buluşmalar</h2>
        <ul className="card-paper mt-3 divide-y divide-border/70 px-4">
          {meetings.slice(0, 3).map((m) => (
            <li key={m.slug} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 py-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent font-display text-xs font-semibold text-accent-foreground">
                {m.date.split(" ")[0]}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{m.club}</span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                  {m.time} · {m.place}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
