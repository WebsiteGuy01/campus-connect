"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-foreground/20 px-3 py-2 text-sm font-medium transition hover:bg-foreground/10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}
