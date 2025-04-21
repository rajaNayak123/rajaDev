"use client";

import { useEffect, useState } from "react";
import Terminal from "@/components/terminal";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import { CommandProvider } from "@/components/command-context";
import MobileNav from "@/components/mobile-nav";
import { useMobile } from "@/hooks/use-mobile";
import ParticleBackground from "@/components/particle-background";
import { AnimatePresence, motion } from "framer-motion";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobile();
  const [theme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <CommandProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black text-slate-800 dark:text-green-500 font-mono flex flex-col md:flex-row transition-colors duration-500">
          <ParticleBackground theme={theme} />
          <AnimatePresence mode="wait">
            {isMobile ? (
              <MobileNav key="mobile-nav" />
            ) : (
              <Sidebar key="sidebar" />
            )}
          </AnimatePresence>
          <motion.main
            className="flex-1 p-2 md:p-4 overflow-hidden relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal />
          </motion.main>
        </div>
      </CommandProvider>
    </ThemeProvider>
  );
}
