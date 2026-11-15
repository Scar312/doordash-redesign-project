import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgePercent, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Save Up To 90% on DoorDash" },
      { name: "description", content: "Unlock huge DoorDash savings in USA, UK, Canada and Australia. Apply in seconds." },
      { property: "og:title", content: "Save Up To 90% on DoorDash" },
      { property: "og:description", content: "Unlock huge DoorDash savings in USA, UK, Canada and Australia. Apply in seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const perks = [
  { icon: BadgePercent, label: "Up to 90% off" },
  { icon: Clock, label: "Reply in 24h" },
  { icon: ShieldCheck, label: "Free to apply" },
];

function Index() {
  return (
    <main className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <header className="bg-primary">
        <div className="mx-auto flex max-w-5xl items-center px-5 py-4">
          <img src="/doordash-logo.png" alt="DoorDash" className="h-7 w-auto brightness-0 invert sm:h-8" />
        </div>
      </header>

      <section className="relative flex flex-1 items-center overflow-hidden px-5 py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-primary/5" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            USA · UK · CA · AU
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Your next order,
            <br />
            <span className="text-primary">up to 90% off.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Exclusive DoorDash savings for eligible customers. Tap below to see if you qualify.
          </p>

          <a
            href="https://linkthem.net/aff_c?offer_id=3463&aff_id=16139"
            className="group mt-10 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-10 text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-button transition duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
          >
            Apply Now
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>

          <ul className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-3">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 shadow-card">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <span className="text-xs font-semibold text-card-foreground sm:text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="px-5 py-6 text-center text-xs text-muted-foreground">
        Not affiliated with DoorDash, Inc.
      </footer>
    </main>
  );
}
