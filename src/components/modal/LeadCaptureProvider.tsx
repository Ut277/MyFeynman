"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { trackCTAClick, trackModalOpen } from "@/lib/analytics";

interface LeadCaptureContextValue {
  isOpen: boolean;
  openModal: (source?: string) => void;
  closeModal: () => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((source = "unknown") => {
    trackCTAClick(source);
    trackModalOpen();
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <LeadCaptureContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const ctx = useContext(LeadCaptureContext);
  if (!ctx) {
    throw new Error("useLeadCapture must be used within LeadCaptureProvider");
  }
  return ctx;
}
