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
    <div className="mx-auto max-w-md px-4 py-6">
      <p className="text-eyebrow">Program</p>
      <h1 className="mt-1 text-2xl font-semibold">Buluşma takvimi</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Yaklaşan tüm kulüp buluşmaları tek yerde.
      </p>

      <ol className="mt-6 space-y-3">
        {meetings.map((m) => (
          <li key={m.slug} className="card-paper p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
              <Link
                to="/kulupler/$slug"
                params={{ slug: m.slug }}
                className="truncate font-display text-lg font-semibold"
              >
                {m.club}
              </Link>
              <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs text-accent-foreground">
                {m.date}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Okunan kitap: <span className="text-foreground">{m.book}</span>
            </p>
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 shrink-0 text-primary" /> {m.time}
              </span>
              <span className="flex min-w-0 items-center gap-1.5">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span className="truncate">{m.place}</span>
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
