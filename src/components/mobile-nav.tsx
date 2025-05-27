"use client";

import { useState } from "react";
import { useCommand } from "./command-context";
import { useTheme } from "next-themes";
import {
  Menu,
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function MobileNav() {
  const { activeSection, executeCommand } = useCommand();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleNavClick = (section: string) => {
    executeCommand(section);
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-slate-200 dark:border-green-800 p-4 flex items-center justify-between bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg z-20"
    >
      <div className="flex items-center">
        <div className="relative group">
          <img
            src="/images/rajaProfile.jpg"
            alt="Developer Avatar"
            className="h-10 w-10 rounded-full mr-3 border border-emerald-500 dark:border-green-500 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 dark:from-green-400 dark:to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-800 dark:text-green-400">
            Raja Nayak
          </h1>
          <p className="text-xs text-slate-600 dark:text-gray-400">
            Fullstack Developer
          </p>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-800 hover:text-emerald-700 dark:text-green-500 dark:hover:text-green-400"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white/95 dark:bg-black/95 backdrop-blur-sm border-slate-200 dark:border-green-800 text-slate-800 dark:text-green-500 p-0"
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 dark:border-green-800">
              <div className="flex items-center justify-center mb-4">
                <div className="relative group">
                  <img
                    src="/images/profileImg.jpg"
                    alt="Developer Avatar"
                    className="h-20 w-20 rounded-full border-2 border-emerald-500 dark:border-green-500 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 dark:from-green-400 dark:to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800 dark:text-green-400 text-center">
                Raja Nayak
              </h1>
              <p className="text-sm text-slate-600 dark:text-gray-400 text-center">
                Full Stack Developer
              </p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "home"
                    ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                    : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
                } transition-all duration-300`}
                onClick={() => handleNavClick("home")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "about"
                    ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                    : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
                } transition-all duration-300`}
                onClick={() => handleNavClick("about")}
              >
                <User className="mr-2 h-4 w-4" />
                About
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "projects"
                    ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                    : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
                } transition-all duration-300`}
                onClick={() => handleNavClick("projects")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "skills"
                    ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                    : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
                } transition-all duration-300`}
                onClick={() => handleNavClick("skills")}
              >
                <Code className="mr-2 h-4 w-4" />
                Skills
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "contact"
                    ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                    : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
                } transition-all duration-300`}
                onClick={() => handleNavClick("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300"
                onClick={() => {
                  handleNavClick("help");
                }}
              >
                <Terminal className="mr-2 h-4 w-4" />
                Commands
              </Button>
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-green-800 space-y-4">
              <div className="flex justify-center space-x-2">
                <a href="https://github.com/rajaNayak123" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 dark:border-green-800 text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400 hover:scale-110 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/raja-nayak8658/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 dark:border-green-800 text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://leetcode.com/u/Raja_Nayak123/" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-300 dark:border-green-800 text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400 hover:scale-110 transition-all duration-300"
                  >
                    <Code className="h-4 w-4" />
                    <span className="sr-only">Leetcode</span>
                  </Button>
                </a>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full border-slate-300 dark:border-green-800 text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
}
