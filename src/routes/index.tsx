import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, CalendarDays, ChevronRight, MessagesSquare, Users } from "lucide-react";
import heroImage from "@/assets/hero-kitap.jpg";
import { clubs, meetings } from "@/data/clubs";

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
  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <section className="card-paper overflow-hidden">
        <img
          src={heroImage}
          alt="Kitap yığını, kahve ve okuma köşesi illüstrasyonu"
          width={1600}
          height={1008}
          className="h-40 w-full object-cover"
        />
        <div className="p-5">
          <p className="text-eyebrow">Okuma kulüpleri için</p>
          <h1 className="mt-1.5 text-3xl leading-tight font-semibold">
            Birlikte okumanın
            <span className="text-primary"> en güzel hâli</span>
          </h1>
          <p className="mt-2.5 text-sm text-muted-foreground">
            Kulübünü kur, üyeleri bir arada tut, her buluşmayı zamanında planla.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/kulupler"
              className="rounded-xl bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Kulüpleri keşfet
            </Link>
            <Link
              to="/takvim"
              className="rounded-xl border border-border bg-card px-5 py-3 text-center text-sm font-medium"
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
          <div key={l} className="card-paper px-3 py-3 text-center">
            <dt className="font-display text-xl font-semibold">{n}</dt>
            <dd className="text-xs text-muted-foreground">{l}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-7">
        <h2 className="text-lg font-semibold">Kulübün için her şey</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {features.map((f) => (
            <div key={f.title} className="card-paper p-4">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
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
              className="card-paper flex overflow-hidden"
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
        <ul className="card-paper mt-3 divide-y divide-border px-4">
          {meetings.slice(0, 3).map((m) => (
            <li key={m.slug} className="py-3">
              <p className="truncate text-sm font-medium">{m.club}</p>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {m.date} · {m.time} · {m.place}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
