import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { LocaleHtml } from "@/components/layout/LocaleHtml";
import { LeadCaptureProvider } from "@/components/modal/LeadCaptureProvider";
import { LeadCaptureModal } from "@/components/modal/LeadCaptureModal";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();

  const dictionary = getDictionary(params.locale);

  return (
    <LocaleProvider locale={params.locale} dictionary={dictionary}>
      <LocaleHtml locale={params.locale} />
      <LeadCaptureProvider>
        <Header />
        <main lang={params.locale}>{children}</main>
        <Footer />
        <WhatsAppButton />
        <LeadCaptureModal />
      </LeadCaptureProvider>
      <GoogleAnalytics />
    </LocaleProvider>
  );
}
