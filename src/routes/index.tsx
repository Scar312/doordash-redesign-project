import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import doordashLogo from "../assets/doordash-logo-cropped.png.asset.json";

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

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="relative flex flex-col overflow-hidden bg-primary py-3 sm:py-6">
        <div className="relative z-10 px-4 py-2 sm:p-6">
          <img
            src={doordashLogo.url}
            alt="DoorDash"
            className="h-8 w-auto object-contain brightness-0 invert sm:h-10"
          />
        </div>
        <span className="absolute right-10 top-10 size-4 rounded-full bg-primary-foreground/20" aria-hidden="true" />
        <span className="absolute bottom-5 right-20 size-6 rounded-full bg-primary-foreground/15" aria-hidden="true" />
        <span className="absolute left-10 top-1/3 size-3 rounded-full bg-primary-foreground/25" aria-hidden="true" />
      </header>

      <section className="bg-background px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black leading-tight sm:text-5xl">
            Save Up To 90% on DoorDash!
          </h1>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <div key={country} className="flex items-center gap-1 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-primary">
                <MapPin className="size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{country}</span>
              </div>
            ))}
          </div>
          </div>

          <div className="mb-12 text-center">
          <h2 className="mb-12 text-4xl font-black uppercase sm:text-5xl">How to qualify</h2>

          <ol className="mx-auto max-w-2xl space-y-8">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 text-left shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="min-w-0 text-lg font-semibold leading-relaxed text-card-foreground sm:text-xl">{step}</span>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-16">
        <div className="mx-auto max-w-4xl text-center">
            <a
              href="https://linkthem.net/aff_c?offer_id=1164&aff_id=16139"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-primary px-12 py-3 text-xl font-bold uppercase text-primary-foreground shadow-button transition duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            >
              Apply Now
            </a>
        </div>
      </section>
    </main>
  );
}
