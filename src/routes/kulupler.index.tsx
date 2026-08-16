import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, ChevronRight, MapPin, Users } from "lucide-react";
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
    <div className="mx-auto max-w-md px-4 py-6">
      <p className="text-eyebrow">Keşfet</p>
      <h1 className="mt-1 text-2xl font-semibold">Kulüpler</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {clubs.length} aktif kulüp, her biri kendi ritmiyle okuyor.
      </p>

      <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`press shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              genre === g
                ? "border-transparent gradient-warm text-primary-foreground shadow-[0_8px_20px_-12px_var(--color-primary)]"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {list.map((club) => (
          <Link
            key={club.slug}
            to="/kulupler/$slug"
            params={{ slug: club.slug }}
            className="card-paper press flex overflow-hidden"
          >
            <div className="spine w-1.5 shrink-0" style={{ backgroundColor: club.spine }} />

            <div className="min-w-0 flex-1 p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2">
                <div className="min-w-0">
                  <span className="text-eyebrow">{club.genre}</span>
                  <h2 className="mt-1 truncate text-lg font-semibold">{club.name}</h2>
                </div>
                <ChevronRight className="mt-1 size-5 shrink-0 text-muted-foreground" />
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{club.tagline}</p>
              <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 shrink-0 text-primary" /> {club.city}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-3.5 shrink-0 text-primary" /> {club.members}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 shrink-0 text-primary" /> {club.cadence}
                </span>
              </dl>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
