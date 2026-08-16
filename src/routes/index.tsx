import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, CalendarDays, MessagesSquare, Users } from "lucide-react";
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
  {
    icon: Users,
    title: "Kulübünü kur",
    text: "Dakikalar içinde bir kulüp aç, üyeleri davet et, okuma ritmini belirle.",
  },
  {
    icon: BookMarked,
    title: "İlerlemeyi izle",
    text: "Herkesin kaçıncı sayfada olduğunu gör; kimse spoiler yemeden ilerlesin.",
  },
  {
    icon: CalendarDays,
    title: "Buluşmaları planla",
    text: "Tarih, saat ve mekânı paylaş; hatırlatmalar otomatik gitsin.",
  },
  {
    icon: MessagesSquare,
    title: "Bölüm bölüm tartış",
    text: "Alıntılar, notlar ve sorular bölümlere göre düzenli dursun.",
  },
];

function Index() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-eyebrow">Okuma kulüpleri için</p>
          <h1 className="mt-4 text-5xl leading-[1.05] font-semibold sm:text-6xl">
            Birlikte okumanın
            <span className="text-primary"> en güzel hâli</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Sayfa Arası; kitap kulübünü kurmanı, üyeleri bir arada tutmanı ve her
            buluşmayı zamanında planlamanı sağlar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kulupler"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Kulüpleri keşfet
            </Link>
            <Link
              to="/takvim"
              className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Buluşma takvimi
            </Link>
          </div>
          <dl className="mt-10 flex gap-8">
            {[
              ["139", "okur"],
              [String(clubs.length), "aktif kulüp"],
              ["24", "kitap"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-semibold">{n}</dt>
                <dd className="text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="card-paper overflow-hidden">
          <img
            src={heroImage}
            alt="Kitap yığını, kahve ve okuma köşesi illüstrasyonu"
            width={1600}
            height={1008}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <h2 className="text-3xl font-semibold">Kulübün için gereken her şey</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-paper card-paper-hover p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl font-semibold">Öne çıkan kulüpler</h2>
          <Link to="/kulupler" className="text-sm text-primary hover:underline">
            Tümünü gör
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {clubs.slice(0, 3).map((club) => (
            <Link
              key={club.slug}
              to="/kulupler/$slug"
              params={{ slug: club.slug }}
              className="card-paper card-paper-hover overflow-hidden"
            >
              <div className="spine h-2 w-full" style={{ backgroundColor: club.spine }} />
              <div className="p-6">
                <span className="text-eyebrow">{club.genre}</span>
                <h3 className="mt-2 text-xl font-semibold">{club.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{club.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {club.city} · {club.members} üye
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="card-paper p-8">
          <h2 className="text-2xl font-semibold">Bu haftaki buluşmalar</h2>
          <ul className="mt-6 divide-y divide-border">
            {meetings.slice(0, 3).map((m) => (
              <li key={m.slug} className="flex flex-wrap justify-between gap-2 py-4">
                <span className="font-medium">{m.club}</span>
                <span className="text-sm text-muted-foreground">
                  {m.date} · {m.time} · {m.place}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
