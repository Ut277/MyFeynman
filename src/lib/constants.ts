export const WHATSAPP_NUMBER = "919068533260";
export const WHATSAPP_NUMBER_DISPLAY = "+91 90685 33260";
export const WHATSAPP_MESSAGE =
  "Hi, I'd like to book a free demo class for my child";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
