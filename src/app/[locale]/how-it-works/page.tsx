import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BloomsTaxonomy,
  DokLevelsIllustration,
} from "@/components/method/BloomsTaxonomy";
import { KnowledgeGraphIllustration } from "@/components/method/illustrations/KnowledgeGraphIllustration";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localizedPath, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).howItWorksPage;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function HowItWorksPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).howItWorksPage;

  return (
    <>
      <section className="bg-orange-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading title={t.title} subtitle={t.subtitle} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.timeline.map((item, index) => (
              <div
                key={item.period}
                className="relative rounded-2xl border border-navy/5 bg-white p-6 shadow-sm"
              >
                {index < t.timeline.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-orange-primary/30 lg:block" />
                )}
                <p className="text-sm font-bold text-orange-primary">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-grey">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title={t.knowledgeMap.title} />
              <div className="space-y-4 text-warm-grey">
                <p>{t.knowledgeMap.p1}</p>
                <p>{t.knowledgeMap.p2}</p>
                <p>{t.knowledgeMap.p3}</p>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-orange-light p-6 md:p-8">
              <KnowledgeGraphIllustration
                centerLabel={t.knowledgeMap.graph.centerLabel}
                nodes={t.knowledgeMap.graph.nodes}
                legend={t.knowledgeMap.graph.legend}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <BloomsTaxonomy
              title={t.bloomsTaxonomy.title}
              body={t.bloomsTaxonomy.body}
              levels={t.bloomsTaxonomy.levels}
              sessionNoteLabel={t.bloomsTaxonomy.sessionNoteLabel}
              sessionNoteExample={t.bloomsTaxonomy.sessionNoteExample}
            />
            <div className="flex flex-col items-center justify-center rounded-2xl border border-navy/5 bg-white p-6 md:p-8">
              <p className="text-center text-sm font-semibold text-navy">
                {t.bloomsTaxonomy.dokTitle}
              </p>
              <DokLevelsIllustration className="mt-4" />
              <div className="mt-4 w-full max-w-xs space-y-2">
                {t.bloomsTaxonomy.dokLevels.map((item) => (
                  <div
                    key={item.level}
                    className="flex items-center justify-between rounded-lg bg-orange-light px-4 py-2"
                  >
                    <span className="text-sm font-semibold text-navy">
                      {item.level}
                    </span>
                    <span className="text-xs text-warm-grey">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs leading-relaxed text-warm-grey">
                {t.bloomsTaxonomy.dokBody}
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-warm-grey">
            <Link
              href={localizedPath(locale, "/our-method")}
              className="font-medium text-orange-primary hover:underline"
            >
              {t.bloomsTaxonomy.ourMethodLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading title={t.matchTutor.title} centered />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {t.matchTutor.steps.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy/5 bg-orange-light p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-primary text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-grey">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading title={t.weeklyCycle.title} centered />
          <div className="mx-auto max-w-2xl space-y-4">
            {t.weeklyCycle.items.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-light text-sm font-bold text-orange-primary">
                  {i + 1}
                </span>
                <p className="text-sm text-navy">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-warm-grey">
            {t.weeklyCycle.quickVersion}{" "}
            <Link
              href={localizedPath(locale)}
              className="font-medium text-orange-primary hover:underline"
            >
              {t.weeklyCycle.homepageLink}
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
