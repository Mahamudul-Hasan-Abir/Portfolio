"use client";

import Portfolio from "@/components/Portfolio/Portfolio";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ResponsivePortfolio = () => {
  const pathname = usePathname();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Show in lg: always show
  if (isLargeScreen) return <Portfolio />;

  // Show in sm/md: only on homepage
  if (pathname === "/") return <Portfolio />;

  return null;
};

export default ResponsivePortfolio;
