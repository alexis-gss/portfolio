"use client";

import { MoonIcon, SunIcon, MonitorIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = ["light", "dark", "system"];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(String(theme));
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <Button
      className="cursor-pointer dark:text-white dark:bg-opacity-100 hover:dark:bg-opacity-100 transition-all duration-300 hover:-translate-y-0.5"
      onClick={toggleTheme}
      size="icon"
      variant="outline"
      aria-label="Toggle Theme"
    >
      {theme === "light" && <SunIcon />}
      {theme === "dark" && <MoonIcon />}
      {theme === "system" && <MonitorIcon />}
    </Button>
  );
}
