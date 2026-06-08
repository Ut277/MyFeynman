import type { Metadata } from "next";
import { PricingCard } from "@/components/landing/PricingSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).pricingPage;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function PricingPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).pricing;

  return (
    <>
      <section className="bg-orange-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <PricingCard showHeading />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading title={t.includedTitle} centered />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {t.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy/5"
              >
                <span className="text-accent-green">✓</span>
                <span className="text-sm text-navy">{feature}</span>
              </div>
            ))}
            {t.extraFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy/5"
              >
                <span className="text-accent-green">✓</span>
                <span className="text-sm text-navy">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            title={t.compareTitle}
            subtitle={t.compareSubtitle}
            centered
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-navy/10">
                  {t.comparison.headers.map((header, i) => (
                    <th
                      key={header}
                      className={`px-4 py-4 text-left font-semibold ${
                        i === 3 ? "text-orange-primary" : "text-navy"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-navy/5 hover:bg-orange-light/50"
                  >
                    {row.map((cell, i) => (
                      <td
                        key={`${row[0]}-${i}`}
                        className={`px-4 py-4 ${
                          i === 0
                            ? "font-medium text-navy"
                            : i === 3
                              ? "font-medium text-navy"
                              : "text-warm-grey"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
