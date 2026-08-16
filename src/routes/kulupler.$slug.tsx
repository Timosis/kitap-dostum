import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { clubs } from "@/data/clubs";

export const Route = createFileRoute("/kulupler/$slug")({
  loader: ({ params }) => {
    const club = clubs.find((c) => c.slug === params.slug);
    if (!club) throw notFound();
    return { club };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Kulüp bulunamadı" }, { name: "robots", content: "noindex" }],
      };
    }
    const { club } = loaderData;
    return {
      meta: [
        { title: `${club.name} — Kitap Kulübü` },
        { name: "description", content: club.tagline },
        { property: "og:title", content: `${club.name} — Kitap Kulübü` },
        { property: "og:description", content: club.tagline },
      ],
    };
  },
  component: ClubDetail,
});

function ClubDetail() {
  const { club } = Route.useLoaderData();
  const [joined, setJoined] = useState(false);

  return (
    <div className="mx-auto max-w-md px-4 py-5">
      <Link
        to="/kulupler"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
      >
        <ArrowLeft className="size-4" /> Kulüpler
      </Link>

      <div className="card-paper mt-4 overflow-hidden">
        <div className="spine h-2.5 w-full" style={{ backgroundColor: club.spine }} />
        <div className="p-5">
          <span className="text-eyebrow">{club.genre}</span>
          <h1 className="mt-1 text-2xl font-semibold">{club.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{club.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0 text-primary" /> {club.city}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="size-4 shrink-0 text-primary" /> {club.members} üye
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4 shrink-0 text-primary" /> {club.cadence}
            </span>
          </div>
        </div>
      </div>

      <section className="card-paper mt-4 p-5">
        <h2 className="text-base font-semibold">Şu an okunuyor</h2>
        <p className="mt-2 font-display text-xl">{club.currentBook.title}</p>
        <p className="text-sm text-muted-foreground">{club.currentBook.author}</p>
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="gradient-warm h-full rounded-full transition-all"
            style={{ width: `${club.currentBook.progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Kulüp ortalaması %{club.currentBook.progress}
        </p>
      </section>

      <section className="card-paper mt-4 p-5">
        <h2 className="text-base font-semibold">Sonraki buluşma</h2>
        <p className="mt-2 font-display text-xl">{club.nextMeeting.date}</p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-primary" /> {club.nextMeeting.time}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-primary" /> {club.nextMeeting.place}
          </li>
        </ul>
        <p className="mt-4 rounded-xl border border-border/70 bg-accent/60 p-3 text-sm">
          Bu buluşmada kitabın ilk yarısı konuşulacak. Not defterini getir.
        </p>
      </section>

      <button
        onClick={() => setJoined((v) => !v)}
        className={`press mt-5 w-full rounded-xl px-5 py-3.5 text-sm font-semibold transition-colors ${
          joined
            ? "bg-secondary text-secondary-foreground"
            : "gradient-warm text-primary-foreground shadow-[0_12px_28px_-14px_var(--color-primary)]"
        }`}
      >
        {joined ? "Katıldın ✓" : "Kulübe katıl"}
      </button>

    </div>
  );
}
