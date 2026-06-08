"use client";

import { useCallback, useEffect, useRef } from "react";

export const SAMPLE_EMBED_HEIGHT_CLASS = "h-[min(720px,75vh)]";
export const SAMPLE_EMBED_HEIGHT_LG_CLASS = "lg:h-[min(720px,75vh)]";

export function SampleMaterialEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const syncIframeHeight = useCallback(() => {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    if (!doc) return;

    doc.documentElement.style.overflow = "hidden";
    doc.body.style.overflow = "hidden";
    iframe.style.height = `${doc.documentElement.scrollHeight}px`;
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer: ResizeObserver | undefined;

    const handleLoad = () => {
      syncIframeHeight();
      const doc = iframe.contentDocument;
      if (!doc?.body) return;

      observer?.disconnect();
      observer = new ResizeObserver(() => syncIframeHeight());
      observer.observe(doc.body);
    };

    iframe.addEventListener("load", handleLoad);
    if (iframe.contentDocument?.readyState === "complete") {
      handleLoad();
    }

    return () => {
      iframe.removeEventListener("load", handleLoad);
      observer?.disconnect();
    };
  }, [syncIframeHeight]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== "myfeynman-embed-scroll") return;
      const el = scrollRef.current;
      if (!el || typeof event.data.deltaY !== "number") return;

      el.scrollTop += event.data.deltaY;
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

    if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
      e.preventDefault();
    }

    e.stopPropagation();
  }, []);

  return (
    <div
      ref={scrollRef}
      onWheel={handleWheel}
      className={`${SAMPLE_EMBED_HEIGHT_CLASS} overflow-y-auto overscroll-y-contain rounded-2xl border border-navy/10 bg-white shadow-sm ring-1 ring-navy/5`}
    >
      <iframe
        ref={iframeRef}
        src="/myfeynman_sample_material.html"
        title="MyFeynman sample post-session materials"
        className="block w-full min-h-[480px] border-0"
        loading="lazy"
        scrolling="no"
      />
    </div>
  );
}
