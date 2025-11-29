"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsClient() {
  useEffect(() => {
    if (!GA_ID) return; // Exit if env variable not set

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Safe gtag function
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };

    // Load GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }, []);

  return null;
}
