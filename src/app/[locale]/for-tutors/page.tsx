import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHATSAPP_URL } from "@/lib/constants";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localizedPath, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).forTutorsPage;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function ForTutorsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).forTutorsPage;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <SectionHeading title={t.title} subtitle={t.subtitle} centered />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-orange-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#d14f12]"
        >
          {t.cta}
        </a>
        <p className="mt-8 text-sm text-warm-grey">
          <Link
            href={localizedPath(locale)}
            className="text-orange-primary hover:underline"
          >
            {t.backHome}
          </Link>
        </p>
      </div>
    </section>
  );
}
