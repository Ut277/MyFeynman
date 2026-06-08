import { GA_MEASUREMENT_ID } from "./constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  window.gtag?.("event", eventName, params);
}

export function trackWhatsAppClick() {
  trackEvent("whatsapp_click", { event_category: "engagement" });
}
