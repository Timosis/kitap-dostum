import { Link } from "@tanstack/react-router";
import { BookOpen, CalendarDays, Home, Library } from "lucide-react";

const tabs = [
  { to: "/", label: "Ana Sayfa", icon: Home },
  { to: "/kulupler", label: "Kulüpler", icon: Library },
  { to: "/takvim", label: "Takvim", icon: CalendarDays },
] as const;

export function SiteHeader() {
  return (
    <header className="glass-bar sticky top-0 z-40 border-b border-border/60">
      <div className="mx-auto grid h-14 max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4">
        <Link to="/" className="press flex min-w-0 items-center gap-2.5">
          <span className="gradient-warm flex size-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-[0_6px_16px_-6px_var(--color-primary)]">
            <BookOpen className="size-4.5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight font-semibold tracking-tight">
              Sayfa Arası
            </span>
            <span className="block truncate text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Kitap kulüpleri
            </span>
          </span>
        </Link>
        <span className="shrink-0 rounded-full border border-gold/40 bg-gold/15 px-2.5 py-1 text-[11px] font-medium text-gold-foreground">
          Beta
        </span>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <nav className="glass-bar sticky bottom-0 z-40 border-t border-border/60 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1 px-3 py-2">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            activeOptions={{ exact: tab.to === "/" }}
            className="press flex flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] text-muted-foreground transition-colors"
            activeProps={{
              className: "text-primary font-semibold bg-accent/70",
            }}
          >
            <tab.icon className="size-5" />
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
