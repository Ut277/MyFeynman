"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { useTranslations } from "@/i18n/LocaleProvider";

export function FAQSection() {
  const { t } = useTranslations();

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading title={t.faq.title} centered />
        <Accordion items={t.faq.items} />
      </div>
    </section>
  );
}
