import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import doordashLogo from "../assets/doordash-logo.png.asset.json";

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
      <header className="relative flex h-36 items-center bg-primary px-6 sm:h-40 sm:px-10">
        <img
          src={doordashLogo.url}
          alt="DoorDash"
          className="h-auto w-52 brightness-0 invert sm:w-64"
        />
        <span className="absolute right-8 top-1/2 size-8 -translate-y-1/2 rounded-full bg-primary-foreground/20 sm:right-14" aria-hidden="true" />
      </header>

      <div className="mx-auto max-w-4xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
        <section className="text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-6xl">
            Save Up To 90% on DoorDash!
          </h1>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-7">
            {countries.map((country) => (
              <div key={country} className="flex h-16 items-center justify-center gap-2 rounded-full bg-secondary px-5 text-xl font-extrabold text-primary">
                <MapPin className="size-6 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-32">
          <h2 className="text-center text-4xl font-black uppercase sm:text-5xl">How to qualify</h2>

          <ol className="mt-16 space-y-7 sm:mt-20 sm:space-y-10">
            {steps.map((step, index) => (
              <li key={step} className="flex min-h-44 items-center gap-6 rounded-lg border border-border bg-card px-7 py-8 shadow-card sm:gap-10 sm:px-12">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-xl font-bold leading-snug text-card-foreground sm:text-3xl">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-28 flex justify-center sm:mt-32">
            <a
              href="https://linkthem.net/aff_c?offer_id=1164&aff_id=16139"
              className="inline-flex min-h-20 w-full max-w-md items-center justify-center rounded-full bg-primary px-8 text-2xl font-black uppercase text-primary-foreground shadow-button transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            >
              Apply Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
