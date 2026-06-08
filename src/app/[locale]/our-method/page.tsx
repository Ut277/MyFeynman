import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FrameworkIllustration } from "@/components/method/illustrations/FrameworkIllustration";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localizedPath, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).ourMethodPage;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function OurMethodPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const t = dict.ourMethodPage;
  const bloomsLabels = dict.howItWorksPage.bloomsTaxonomy.levels.map(
    (level) => level.name,
  );

  return (
    <>
      <section className="bg-orange-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading title={t.pillarsTitle} centered />

          <div className="space-y-8">
            {t.pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-sm"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="flex items-center justify-center bg-orange-primary px-6 py-6 lg:w-24 lg:shrink-0 lg:flex-col lg:py-10">
                    <span className="text-4xl font-bold text-white lg:text-5xl">
                      {pillar.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 p-6 md:p-8 lg:flex-row">
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-primary">
                        {pillar.frameworks}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-navy md:text-2xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 text-base font-medium leading-relaxed text-navy">
                        {pillar.pitch}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {pillar.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm leading-relaxed text-warm-grey"
                          >
                            <span
                              className="mt-1 text-orange-primary"
                              aria-hidden
                            >
                              ·
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-64 lg:shrink-0">
                      <FrameworkIllustration
                        pillar={pillar.number}
                        bloomsLabels={
                          pillar.number === 1
                            ? [...bloomsLabels].reverse()
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-warm-grey">
            {t.howItWorksPrompt}{" "}
            <Link
              href={localizedPath(locale, "/how-it-works")}
              className="font-medium text-orange-primary hover:underline"
            >
              {t.howItWorksLink}
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
