import Image from "next/image";
import { Button } from "@/components/ui/button";
import AIAnimatedBackground from "./background/page";
import { ThemeProvider } from "./modes/themeprovider";
import { ThemeSwitcher } from "./modes/page";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <AIAnimatedBackground />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
