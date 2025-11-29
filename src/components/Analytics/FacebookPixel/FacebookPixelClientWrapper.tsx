"use client";

import dynamic from "next/dynamic";

const FacebookPixel = dynamic(() => import("./FacebookPixelHeader"), {
  ssr: false,
});

export default function FacebookPixelWrapper() {
  return <FacebookPixel />;
}
