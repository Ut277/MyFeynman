import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localizedPath, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).termsPage;
  return { title: t.metaTitle };
}

export default function TermsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const t = getDictionary(locale).termsPage;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="font-display text-3xl font-semibold text-navy">
          {t.title}
        </h1>
        <p className="mt-4 text-warm-grey">{t.body}</p>
        <Link
          href={localizedPath(locale)}
          className="mt-8 inline-block text-orange-primary hover:underline"
        >
          {t.backHome}
        </Link>
      </div>
    </section>
  );
}
