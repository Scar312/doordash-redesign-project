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
      <header className="relative flex h-24 items-center bg-primary px-5 sm:h-32 sm:px-10 lg:h-36">
        <img
          src={doordashLogo.url}
          alt="DoorDash"
          className="h-auto w-44 brightness-0 invert sm:w-56 lg:w-60"
        />
        <span className="absolute right-6 top-1/2 size-7 -translate-y-1/2 rounded-full bg-primary-foreground/20 sm:right-12 sm:size-8" aria-hidden="true" />
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:pt-24">
        <section className="text-center">
          <h1 className="mx-auto max-w-3xl text-[2rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
            Save Up To 90% on DoorDash!
          </h1>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-5">
            {countries.map((country) => (
              <div key={country} className="flex h-12 items-center justify-center gap-2 rounded-full bg-secondary px-4 text-base font-extrabold text-primary sm:h-14 sm:text-lg">
                <MapPin className="size-5 shrink-0 sm:size-6" strokeWidth={2.5} aria-hidden="true" />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-[1.75rem] font-black uppercase sm:text-4xl lg:text-[2.75rem]">How to qualify</h2>

          <ol className="mt-10 space-y-4 sm:mt-14 sm:space-y-6">
            {steps.map((step, index) => (
              <li key={step} className="grid min-h-28 grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-lg border border-border bg-card px-5 py-5 shadow-card sm:min-h-36 sm:gap-7 sm:px-9 sm:py-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground sm:size-14 sm:text-xl">
                  {index + 1}
                </span>
                <span className="min-w-0 text-base font-bold leading-snug text-card-foreground sm:text-2xl">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex justify-center sm:mt-20">
            <a
              href="https://linkthem.net/aff_c?offer_id=1164&aff_id=16139"
              className="inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-primary px-8 text-lg font-black uppercase text-primary-foreground shadow-button transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring sm:min-h-16 sm:max-w-md sm:text-xl"
            >
              Apply Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
