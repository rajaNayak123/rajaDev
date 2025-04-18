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

export default function Terminal() {
  const { activeSection, executeCommand, output } =
    useCommand();
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, activeSection]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

  return (
    <div
      ref={terminalRef}
      className="h-[calc(100vh-2rem)] md:h-[calc(100vh-2rem)] overflow-y-auto rounded-lg border border-green-500 bg-black dark:bg-gray-900 p-4 shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4 border-b border-green-800 pb-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-sm text-gray-400">
          developer@portfolio ~ {activeSection}
        </span>
      </div>

      <div className="space-y-2">
        {output.map((item, index) => (
          <div key={`output-${index}`}>{item}</div>
        ))}

        {renderSection()}

        <form onSubmit={handleSubmit} className="flex items-center mt-4">
          <span className="text-green-500 mr-2">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-green-500 caret-green-500"
            autoFocus
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
}
