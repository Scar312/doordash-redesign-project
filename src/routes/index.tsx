import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Save Up To 90% on DoorDash" },
      { name: "description", content: "See how to qualify for DoorDash savings in four simple steps." },
      { property: "og:title", content: "Save Up To 90% on DoorDash" },
      { property: "og:description", content: "See how to qualify for DoorDash savings in four simple steps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  "Answer a Few Simple Questions",
  "Drop In Your DoorDash Email",
  "Complete 3–5 Recommended Tasks",
  "Sit Back — We'll Get Back to You Within 24 Hours!",
];

const countries = ["USA", "UK", "CA", "AU"];
const offerUrl = "https://linkthem.net/aff_c?offer_id=3463&aff_id=16139";

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-5 sm:h-[72px] sm:justify-start sm:px-8">
          <img src="/doordash-logo.png" alt="DoorDash" className="h-8 w-auto object-contain sm:h-9" />
        </div>
      </header>

      <section className="px-5 pb-10 pt-12 text-center sm:px-8 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase text-primary">A little more to enjoy</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Save Up To 90% on DoorDash!
          </h1>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-semibold text-card-foreground"
              >
                <MapPin className="size-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/50 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 text-center sm:mb-9">
            <p className="mb-2 text-xs font-bold uppercase text-primary">Your next steps</p>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">How to qualify</h2>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex min-h-20 items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-card sm:min-h-40 sm:flex-col sm:gap-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-black text-primary">
                  0{index + 1}
                </span>
                <span className="pt-1 text-base font-semibold leading-snug text-card-foreground sm:pt-0 sm:text-lg">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary px-5 py-10 text-center text-primary-foreground sm:px-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black sm:text-3xl">Ready to get started?</h2>
          <p className="mt-2 text-sm text-primary-foreground/85 sm:text-base">
            Take the first step toward your DoorDash savings.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-14 min-w-64 rounded-lg bg-primary-foreground px-8 text-lg font-black uppercase text-primary shadow-button transition-transform hover:scale-[1.02] hover:bg-primary-foreground/90 sm:h-16 sm:min-w-80 sm:text-xl"
          >
            <a href={offerUrl} aria-label="Apply now for DoorDash savings">
              Apply Now
              <ArrowUpRight className="size-5 sm:size-6" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
