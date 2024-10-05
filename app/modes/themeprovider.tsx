// app/providers/ThemeProvider.tsx

"use client";

import { useState, useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("template");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "template");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
