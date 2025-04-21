"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { useCommand } from "./command-context";
import { useTheme } from "next-themes";
import HomeSection from "./sections/home-section";
import AboutSection from "./sections/about-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";
import ContactSection from "./sections/contact-section";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import TypewriterComponent from "typewriter-effect";

export default function Terminal() {
  const {
    activeSection,
    commandHistory,
    executeCommand,
    output,
    historyIndex,
    setHistoryIndex,
    isTyping,
  } = useCommand();
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, activeSection, isTyping]);

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener("click", handleClick);
      return () => terminal.removeEventListener("click", handleClick);
    }
  }, []);

  // Handle keyboard navigation for command history
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === inputRef.current) {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          if (commandHistory.length > 0) {
            const newIndex =
              historyIndex < commandHistory.length - 1
                ? historyIndex + 1
                : historyIndex;
            setHistoryIndex(newIndex);
            setCommand(
              commandHistory[commandHistory.length - 1 - newIndex] || ""
            );
          }
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setCommand(
              commandHistory[commandHistory.length - 1 - newIndex] || ""
            );
          } else if (historyIndex === 0) {
            setHistoryIndex(-1);
            setCommand("");
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [commandHistory, historyIndex, setHistoryIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!command.trim()) return;

    if (command.trim() === "theme") {
      setTheme(theme === "dark" ? "light" : "dark");
      executeCommand("theme");
    } else {
      executeCommand(command);
    }

    setCommand("");
  };

  // Render the active section content
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  const terminalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={terminalVariants}
      className="h-[calc(100vh-2rem)] md:h-[calc(100vh-2rem)] overflow-hidden flex flex-col"
    >
      <div className="backdrop-blur-sm bg-white/80 dark:bg-black/80 rounded-t-lg border border-slate-300 dark:border-green-800 shadow-lg">
        <div className="flex items-center gap-2 p-3 border-b border-slate-200 dark:border-green-900/50">
          <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
          <span className="ml-2 text-sm text-slate-500 dark:text-gray-400 font-mono">
            developer@portfolio ~ {activeSection}
          </span>
        </div>
      </div>

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto rounded-b-lg border-x border-b border-slate-300 dark:border-green-800 bg-white/80 dark:bg-black/80 p-4 shadow-lg backdrop-blur-sm"
      >
        <div className="space-y-2">
          {output.map((item, index) => (
            <div key={`output-${index}`}>{item}</div>
          ))}

          {isTyping && (
            <div className="flex items-center text-emerald-600 dark:text-green-500 gap-2 animate-pulse">
              <Loader2 className="h-4 w-4 animate-spin" />
              <TypewriterComponent
                options={{
                  strings: ["Processing command..."],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50,
                }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>

          <form
            onSubmit={handleSubmit}
            className="flex items-center mt-4 group"
          >
            <span className="text-emerald-600 dark:text-green-500 mr-2 group-focus-within:text-emerald-700 dark:group-focus-within:text-green-400 transition-colors">
              ${" "}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-green-500 caret-emerald-600 dark:caret-green-500 focus:ring-0 focus:outline-none"
              autoFocus
              aria-label="Terminal command input"
              disabled={isTyping}
            />
            <span className="terminal-cursor text-emerald-600 dark:text-green-500 opacity-70">
              ▌
            </span>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
