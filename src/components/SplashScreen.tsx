"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setEntered(true);
    });
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 1600);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  const logoState = exiting
    ? "opacity-0 scale-[1.02] duration-[400ms]"
    : entered
      ? "opacity-100 scale-100 duration-[600ms]"
      : "opacity-0 scale-[0.96] duration-[600ms]";

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white" aria-hidden="true">
      <LogoMark className={`h-24 w-24 text-logo-green transition-all ease-out sm:h-28 sm:w-28 ${logoState}`} />
    </div>
  );
}
