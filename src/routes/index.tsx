import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Concerts />
        <Why />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate min-h-[88dvh] overflow-hidden bg-night text-ivory">
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-night via-night/55 to-night/25" />
      <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="reveal font-display text-sm tracking-[0.22em] text-blush uppercase">
          {t.heroKicker}
        </p>
        <h1 className="reveal reveal-delay-1 mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          {t.heroTitle}
        </h1>
        <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          {t.heroLead}
        </p>
        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
          <Button variant="ivory" asChild>
            <a href="#concerts">
              {t.heroCtaConcerts}
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button variant="night" asChild>
            <a href="#why">{t.heroCtaWhy}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Concerts() {
  const { t } = useI18n();
  const stats = [
    { n: "149", label: t.concertsStatShows },
    { n: "51", label: t.concertsStatCities },
    { n: "21", label: t.concertsStatCountries },
    { n: "5", label: t.concertsStatContinents },
  ];
  const shows = [
    {
      img: "/images/wembley.jpg",
      city: t.show1City,
      venue: t.show1Venue,
      date: t.show1Date,
      note: t.show1Note,
    },
    {
      img: "/images/tokyo.jpg",
      city: t.show2City,
      venue: t.show2Venue,
      date: t.show2Date,
      note: t.show2Note,
    },
    {
      img: "/images/singapore.jpg",
      city: t.show3City,
      venue: t.show3Venue,
      date: t.show3Date,
      note: t.show3Note,
    },
  ];

  return (
    <section id="concerts" className="scroll-mt-24 bg-night py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm tracking-[0.22em] text-blush uppercase">
          {t.concertsKicker}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.concertsTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/72 sm:text-lg">
          {t.concertsLead}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line-night sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-night-2 px-5 py-6">
              <dt className="text-xs tracking-wide text-ivory/50 uppercase">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-4xl font-semibold tracking-tight">
                {s.n}
              </dd>
            </div>
          ))}
        </dl>

        <article className="mt-12 overflow-hidden rounded-xl bg-night-2">
          <div className="grid lg:grid-cols-2">
            <img
              src="/images/vancouver.jpg"
              alt=""
              className="h-72 w-full object-cover sm:h-96 lg:h-full"
            />
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <span className="inline-flex w-fit rounded-full bg-merlot px-3 py-1 text-xs font-medium tracking-wide text-ivory">
                {t.featuredBadge}
              </span>
              <p className="mt-4 text-sm text-ivory/55">
                {t.featuredCity} · {t.featuredVenue}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.featuredTitle}
              </h3>
              <p className="mt-2 text-sm text-blush">{t.featuredDate}</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                {t.featuredBody}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {shows.map((show) => (
            <article
              key={show.venue}
              className="overflow-hidden rounded-lg bg-night-2"
            >
              <img
                src={show.img}
                alt=""
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs tracking-wide text-ivory/50 uppercase">
                  {show.date}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                  {show.city}
                </h3>
                <p className="text-sm text-blush">{show.venue}</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  {show.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-lg bg-night-2 lg:col-span-1">
            <div className="grid sm:grid-cols-2">
              <img
                src="/images/microphone.jpg"
                alt=""
                className="h-52 w-full object-cover sm:h-full"
              />
              <div className="p-6">
                <span className="inline-flex w-fit rounded-full border border-line-night px-3 py-1 text-xs font-medium tracking-wide text-blush">
                  {t.filmBadge}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {t.filmTitle}
                </h3>
                <p className="mt-1 text-sm text-ivory/50">{t.filmMeta}</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  {t.filmBody}
                </p>
              </div>
            </div>
          </article>
          <article className="flex flex-col justify-center rounded-lg border border-line-night p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {t.upcomingTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              {t.upcomingBody}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useI18n();
  const reasons = [
    {
      img: "/images/lyrics.jpg",
      title: t.reason1Title,
      body: t.reason1Body,
    },
    {
      img: "/images/polaroids.jpg",
      title: t.reason2Title,
      body: t.reason2Body,
    },
    {
      img: "/images/bracelets.jpg",
      title: t.reason3Title,
      body: t.reason3Body,
    },
    {
      img: "/images/hero.jpg",
      title: t.reason4Title,
      body: t.reason4Body,
    },
  ];

  return (
    <section id="why" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-sm tracking-[0.22em] text-merlot uppercase">
          {t.whyKicker}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t.whyTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t.whyLead}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {reasons.map((r) => (
            <article key={r.title} className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={r.img}
                  alt=""
                  className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {r.body}
              </p>
            </article>
          ))}
        </div>

        <blockquote className="mt-16 rounded-xl bg-paper-2 px-6 py-10 sm:px-12">
          <p className="font-display text-2xl font-medium italic leading-snug tracking-tight text-ink sm:text-3xl">
            “{t.quote}”
          </p>
          <footer className="mt-5 text-sm text-muted">— {t.quoteAttr}</footer>
        </blockquote>
      </div>
    </section>
  );
}
