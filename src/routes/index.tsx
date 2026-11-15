import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DoorDash Savings — Check Your Offer" },
      { name: "description", content: "Check the DoorDash savings offer and see the steps to apply." },
      { property: "og:title", content: "DoorDash Savings — Check Your Offer" },
      { property: "og:description", content: "Check the DoorDash savings offer and see the steps to apply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const countries = ["USA", "UK", "CA", "AU"];

const steps = [
  "Answer a few simple questions",
  "Enter your DoorDash email",
  "Complete 3–5 recommended tasks",
  "Hear back within 24 hours",
];

const offerUrl = "https://linkthem.net/aff_c?offer_id=3463&aff_id=16139";

function Index() {
  const [country, setCountry] = useState("");

  return (
    <main className="min-h-screen bg-muted/50 px-4 pb-10 text-foreground sm:px-6">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between border-b border-border">
        <a href="/" aria-label="DoorDash Savings home" className="inline-flex items-center">
          <img src="/doordash-logo.png" alt="DoorDash" className="h-7 w-auto object-contain" />
        </a>
        <span className="text-xs font-semibold uppercase text-muted-foreground">Savings offer</span>
      </header>

      <div className="mx-auto grid max-w-5xl items-start gap-8 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-16 lg:pt-16">
        <section className="order-2 mx-auto w-full max-w-md lg:order-1 lg:mx-0 lg:pt-8">
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="size-4" aria-hidden="true" />
            <span>USA · UK · CA · AU</span>
          </div>
          <h1 className="max-w-md text-4xl font-black leading-[1.08] sm:text-5xl">
            Save up to 90% on DoorDash
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
            Check the offer and follow a few simple steps to get started.
          </p>

          <div className="mt-8 border-t border-border pt-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="font-semibold text-foreground">Your application steps</span>
              <span className="text-muted-foreground">About 2 minutes</span>
            </div>
            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex min-w-0 items-center gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border bg-background text-xs font-bold text-foreground">
                    {index + 1}
                  </span>
                  <span className="min-w-0 text-sm leading-5 text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="form-heading" className="order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <div className="h-1.5 bg-primary" aria-hidden="true" />
            <div className="p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold">Check your offer</span>
                <span className="text-sm font-medium text-muted-foreground">Step 1 of 4</span>
              </div>
              <div className="mb-7 flex gap-1.5" aria-label="Step 1 of 4">
                {[0, 1, 2, 3].map((part) => (
                  <span
                    key={part}
                    className={`h-1 flex-1 rounded-full ${part === 0 ? "bg-primary" : "bg-border"}`}
                  />
                ))}
              </div>

              <h2 id="form-heading" className="text-2xl font-bold leading-tight">
                Where do you use DoorDash?
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Choose your country to continue.
              </p>

              <fieldset className="mt-5 grid grid-cols-2 gap-2.5">
                <legend className="sr-only">Choose your country</legend>
                {countries.map((option) => {
                  const isSelected = country === option;
                  return (
                    <label
                      key={option}
                      className={`flex min-h-12 cursor-pointer items-center justify-between rounded-md border px-3.5 text-sm font-semibold transition-colors ${
                        isSelected
                          ? "border-primary bg-secondary text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      <span>{option}</span>
                      <input
                        type="radio"
                        name="country"
                        value={option}
                        checked={isSelected}
                        onChange={() => setCountry(option)}
                        className="sr-only"
                      />
                      {isSelected ? <Check className="size-4" aria-hidden="true" /> : null}
                    </label>
                  );
                })}
              </fieldset>

              <Button asChild size="lg" className="mt-6 h-12 w-full rounded-md text-base font-bold">
                <a href={offerUrl}>
                  Apply Now <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                You’ll continue to the offer page to complete the next steps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}