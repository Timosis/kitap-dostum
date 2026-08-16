import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/kulupler", label: "Kulüpler" },
  { to: "/takvim", label: "Takvim" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="size-4.5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Sayfa Arası
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">Sayfa Arası</p>
        <p>Okuma kulüplerini kurmak, yönetmek ve buluşmalarını planlamak için.</p>
      </div>
    </footer>
  );
}
