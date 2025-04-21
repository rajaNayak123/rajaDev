"use client";

import { useCommand } from "./command-context";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { activeSection, executeCommand } = useCommand();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (section: string) => {
    executeCommand(section);
  };

  const sidebarVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="w-64 border-r border-slate-200 dark:border-green-800 p-4 flex flex-col justify-between bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg z-20"
    >
      <div>
        <motion.div className="mb-8 text-center" variants={itemVariants}>
          <div className="inline-block rounded-full border-2 border-emerald-500 dark:border-green-500 p-1 mb-4 relative group">
            <img
              src="/images/profileImg.jpg"
              alt="Developer Avatar"
              className="h-24 w-24 rounded-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 dark:from-green-400 dark:to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
          <h1 className="text-xl font-bold text-slate-800 dark:text-green-400">
            Raja Nayak
          </h1>
          <p className="text-sm text-slate-600 dark:text-gray-400">
            Full Stack Developer
          </p>
        </motion.div>

        <nav className="space-y-2">
          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeSection === "home"
                  ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                  : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
              } transition-all duration-300 hover:translate-x-1`}
              onClick={() => handleNavClick("home")}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeSection === "about"
                  ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                  : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
              } transition-all duration-300 hover:translate-x-1`}
              onClick={() => handleNavClick("about")}
            >
              <User className="mr-2 h-4 w-4" />
              About
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeSection === "projects"
                  ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                  : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
              } transition-all duration-300 hover:translate-x-1`}
              onClick={() => handleNavClick("projects")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Projects
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeSection === "skills"
                  ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                  : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
              } transition-all duration-300 hover:translate-x-1`}
              onClick={() => handleNavClick("skills")}
            >
              <Code className="mr-2 h-4 w-4" />
              Skills
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeSection === "contact"
                  ? "bg-emerald-100/80 text-emerald-700 dark:bg-green-900/20 dark:text-green-400"
                  : "text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400"
              } transition-all duration-300 hover:translate-x-1`}
              onClick={() => handleNavClick("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              className="w-full justify-start text-slate-600 hover:text-emerald-700 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300 hover:translate-x-1"
              onClick={() => executeCommand("help")}
            >
              <Terminal className="mr-2 h-4 w-4" />
              Commands
            </Button>
          </motion.div>
        </nav>
      </div>

      <div className="space-y-4">
        <motion.div
          className="flex justify-center space-x-2"
          variants={itemVariants}
        >
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
          <a href="https://www.linkedin.com/in/raja-nayak8658/" target="_blank">
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
        </motion.div>

        <motion.div variants={itemVariants}>
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
        </motion.div>
      </div>
    </motion.div>
  );
}
