import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { clubs } from "@/data/clubs";

export const Route = createFileRoute("/kulupler/")({
  head: () => ({
    meta: [
      { title: "Kitap Kulüpleri — Sayfa Arası" },
      {
        name: "description",
        content:
          "Şehrine ve okuma zevkine uygun kitap kulübünü keşfet: polisiye, şiir, bilimkurgu ve daha fazlası.",
      },
      { property: "og:title", content: "Kitap Kulüpleri — Sayfa Arası" },
      {
        property: "og:description",
        content: "Türe ve şehre göre kitap kulüplerini keşfet, buluşmalara katıl.",
      },
    ],
  }),
  component: ClubsPage,
});

function ClubsPage() {
  const genres = useMemo(() => ["Tümü", ...new Set(clubs.map((c) => c.genre))], []);
  const [genre, setGenre] = useState("Tümü");
  const list = genre === "Tümü" ? clubs : clubs.filter((c) => c.genre === genre);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-eyebrow">Keşfet</p>
      <h1 className="mt-2 text-4xl font-semibold">Kulüpler</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        {clubs.length} aktif kulüp, her biri kendi ritmiyle okuyor. Sana uyanı seç,
        bir sonraki buluşmaya katıl.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              genre === g
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((club) => (
          <Link
            key={club.slug}
            to="/kulupler/$slug"
            params={{ slug: club.slug }}
            className="card-paper card-paper-hover group flex flex-col overflow-hidden"
          >
            <div className="spine h-2 w-full" style={{ backgroundColor: club.spine }} />
            <div className="flex flex-1 flex-col p-6">
              <span className="text-eyebrow">{club.genre}</span>
              <h2 className="mt-2 text-xl font-semibold">{club.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{club.tagline}</p>
              <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" /> {club.city}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-primary" /> {club.members} üye
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" /> {club.cadence}
                </div>
              </dl>
              <p className="mt-5 border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">Şu an okunuyor: </span>
                <span className="font-medium">{club.currentBook.title}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
