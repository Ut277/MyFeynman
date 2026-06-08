"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n/LocaleProvider";

const MOCKUP_SRC = {
  hero: "/images/photo1.png",
  whatsapp: "/images/whatsapp-tamil-biology2.png",
} as const;

export function PhoneMockup({
  variant = "hero",
}: {
  variant?: "hero" | "whatsapp";
}) {
  const isHero = variant === "hero";
  const { t } = useTranslations();
  const alt =
    variant === "hero" ? t.phoneMockup.heroAlt : t.phoneMockup.whatsappAlt;

  return (
    <div
      className={`relative mx-auto ${isHero ? "w-[280px] md:w-[320px] lg:w-[340px]" : "w-[260px] md:w-[300px]"}`}
    >
      <Image
        src={MOCKUP_SRC[variant]}
        alt={alt}
        width={680}
        height={1200}
        className="h-auto w-full drop-shadow-2xl"
        priority={isHero}
      />
      <div className="absolute -inset-4 -z-10 rounded-full bg-orange-primary/10 blur-3xl" />
    </div>
  );
}
