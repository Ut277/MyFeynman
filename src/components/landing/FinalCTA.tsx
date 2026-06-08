"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLeadCapture } from "@/components/modal/LeadCaptureProvider";
import { useTranslations } from "@/i18n/LocaleProvider";

export function FinalCTA() {
  const { openModal } = useLeadCapture();
  const { t } = useTranslations();

  return (
    <section className="bg-orange-primary py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 text-center md:px-6"
      >
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {t.finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-white/85">{t.finalCta.subtitle}</p>
        <Button
          variant="secondary"
          className="mt-8 !bg-white !text-orange-primary hover:!bg-orange-light"
          onClick={() => openModal("final_cta")}
        >
          {t.finalCta.cta}
        </Button>
      </motion.div>
    </section>
  );
}
