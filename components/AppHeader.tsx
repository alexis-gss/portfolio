"use client";

import ThemeButton from "@/components/ThemeButton";

export default function AppHeader() {
  return (
    <header className="absolute top-0 right-0 z-10 p-4">
      <ThemeButton />
    </header>
  );
}
