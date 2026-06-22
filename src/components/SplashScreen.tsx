"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";

const SPLASH_STORAGE_KEY = "yuanjie-env-splash-v2-seen";

function hasSeenSplash() {
  try {
    return window.sessionStorage.getItem(SPLASH_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function markSplashSeen() {
  try {
    window.sessionStorage.setItem(SPLASH_STORAGE_KEY, "true");
  } catch {
    // Storage can be unavailable in strict privacy modes; the animation should still complete.
  }
}

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || hasSeenSplash()) {
      setVisible(false);
      return;
    }

    markSplashSeen();
    setVisible(true);

    const frame = window.requestAnimationFrame(() => {
      setEntered(true);
    });
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 2200);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2700);

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
    ? "opacity-0 scale-[1.02] duration-[500ms]"
    : entered
      ? "opacity-100 scale-100 duration-[400ms]"
      : "opacity-0 scale-[0.96] duration-[400ms]";

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white" aria-hidden="true">
      <LogoMark className={`h-24 w-24 text-logo-green transition-all ease-out sm:h-28 sm:w-28 ${logoState}`} />
    </div>
  );
}
