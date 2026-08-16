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
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link
        to="/kulupler"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Tüm kulüpler
      </Link>

      <div className="card-paper mt-6 overflow-hidden">
        <div className="spine h-3 w-full" style={{ backgroundColor: club.spine }} />
        <div className="p-8">
          <span className="text-eyebrow">{club.genre}</span>
          <h1 className="mt-2 text-4xl font-semibold">{club.name}</h1>
          <p className="mt-3 text-muted-foreground">{club.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> {club.city}
            </span>
            <span className="flex items-center gap-2">
              <Users className="size-4 text-primary" /> {club.members} üye
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" /> {club.cadence}
            </span>
          </div>

          <button
            onClick={() => setJoined((v) => !v)}
            className={`mt-7 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
              joined
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            {joined ? "Katıldın ✓" : "Kulübe katıl"}
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="card-paper p-6">
          <h2 className="text-lg font-semibold">Şu an okunuyor</h2>
          <p className="mt-3 font-display text-2xl">{club.currentBook.title}</p>
          <p className="text-sm text-muted-foreground">{club.currentBook.author}</p>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${club.currentBook.progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Kulüp ortalaması %{club.currentBook.progress}
          </p>
        </section>

        <section className="card-paper p-6">
          <h2 className="text-lg font-semibold">Sonraki buluşma</h2>
          <p className="mt-3 font-display text-2xl">{club.nextMeeting.date}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary" /> {club.nextMeeting.time}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> {club.nextMeeting.place}
            </li>
          </ul>
          <p className="mt-5 rounded-lg bg-muted p-3 text-sm">
            Bu buluşmada kitabın ilk yarısı konuşulacak. Not defterini getir.
          </p>
        </section>
      </div>
    </div>
  );
}
