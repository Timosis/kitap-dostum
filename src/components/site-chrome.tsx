import { Link } from "@tanstack/react-router";
import { BookOpen, CalendarDays, Home, Library } from "lucide-react";

const tabs = [
  { to: "/", label: "Ana Sayfa", icon: Home },
  { to: "/kulupler", label: "Kulüpler", icon: Library },
  { to: "/takvim", label: "Takvim", icon: CalendarDays },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid h-14 max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="size-4" />
          </span>
          <span className="truncate font-display text-base font-semibold tracking-tight">
            Sayfa Arası
          </span>
        </Link>
        <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[11px] text-accent-foreground">
          Beta
        </span>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <nav className="sticky bottom-0 z-40 border-t border-border/70 bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-3">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            activeOptions={{ exact: tab.to === "/" }}
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] text-muted-foreground transition-colors"
            activeProps={{ className: "text-primary font-medium" }}
          >
            <tab.icon className="size-5" />
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
