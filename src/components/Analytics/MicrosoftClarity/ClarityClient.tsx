"use client";

import { useEffect } from "react";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

interface ClarityFunction {
  (...args: unknown[]): void;
  q?: unknown[][];
}

export default function ClarityClient() {
  useEffect(() => {
    if (!CLARITY_ID) return;

    // Initialize clarity only if not already present
    if (window.clarity) return;

    // Create function with queue
    const clarityFn: ClarityFunction = (...args: unknown[]) => {
      clarityFn.q = clarityFn.q || [];
      clarityFn.q.push(args);
    };

    window.clarity = clarityFn;

    const script = document.createElement("script");
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    script.async = true;

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }, []);

  return null;
}
