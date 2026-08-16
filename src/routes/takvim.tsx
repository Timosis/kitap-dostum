import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import { meetings } from "@/data/clubs";

export const Route = createFileRoute("/takvim")({
  head: () => ({
    meta: [
      { title: "Buluşma Takvimi — Sayfa Arası" },
      {
        name: "description",
        content:
          "Yaklaşan kitap kulübü buluşmalarını tek listede gör: tarih, saat ve mekân bilgileriyle.",
      },
      { property: "og:title", content: "Buluşma Takvimi — Sayfa Arası" },
      {
        property: "og:description",
        content: "Yaklaşan kitap kulübü buluşmaları, tarih ve mekânlarıyla.",
      },
    ],
  }),
  component: TakvimPage,
});

function TakvimPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-eyebrow">Program</p>
      <h1 className="mt-2 text-4xl font-semibold">Buluşma takvimi</h1>
      <p className="mt-3 text-muted-foreground">
        Yaklaşan tüm kulüp buluşmaları tek yerde.
      </p>

      <ol className="mt-10 space-y-4">
        {meetings.map((m) => (
          <li key={m.slug} className="card-paper card-paper-hover p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <Link
                to="/kulupler/$slug"
                params={{ slug: m.slug }}
                className="font-display text-xl font-semibold hover:text-primary"
              >
                {m.club}
              </Link>
              <span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                {m.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Okunan kitap: <span className="text-foreground">{m.book}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-primary" /> {m.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> {m.place}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
