"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect, JSX } from "react";

export type Section = "home" | "about" | "projects" | "skills" | "contact";

interface CommandContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  commandHistory: string[];
  addCommand: (command: string) => void;
  clearHistory: () => void;
  executeCommand: (command: string) => void;
  output: JSX.Element[];
  addOutput: (output: JSX.Element) => void;
  clearOutput: () => void;
  historyIndex: number;
  setHistoryIndex: (index: number) => void;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

export function CommandProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);

  const addCommand = (command: string) => {
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);
  };

  const clearHistory = () => {
    setCommandHistory([]);
    setHistoryIndex(-1);
  };

  const addOutput = (newOutput: JSX.Element) => {
    setOutput((prev) => [...prev, newOutput]);
  };

  const clearOutput = () => {
    setOutput([]);
  };

  const executeCommand = (command: string) => {
    addCommand(command);
    setIsTyping(true);

    const cmd = command.trim().toLowerCase();

    if (cmd === "clear" || cmd === "cls") {
      clearOutput();
      setIsTyping(false);
      return;
    }

    if (cmd === "help") {
      setTimeout(() => {
        addOutput(
          <div
            key={`output-${Date.now()}`}
            className="mb-4 text-slate-700 dark:text-gray-300 animate-fadeIn"
          >
            <p className="text-amber-600 dark:text-yellow-400 font-bold mb-2">
              Available commands:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  home
                </span>
                <p className="text-sm">View the welcome screen</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  about
                </span>
                <p className="text-sm">Learn about me</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  projects
                </span>
                <p className="text-sm">View my projects</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  skills
                </span>
                <p className="text-sm">See my technical skills</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  contact
                </span>
                <p className="text-sm">Get in touch with me</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  clear
                </span>
                <p className="text-sm">Clear the terminal</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  theme
                </span>
                <p className="text-sm">Toggle light/dark mode</p>
              </div>
              <div className="bg-slate-200/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  matrix
                </span>
                <p className="text-sm">Activate matrix mode</p>
              </div>
            </div>
          </div>
        );
        setIsTyping(false);
      }, 500);
      return;
    }

    if (
      cmd === "home" ||
      cmd === "about" ||
      cmd === "projects" ||
      cmd === "skills" ||
      cmd === "contact"
    ) {
      setActiveSection(cmd as Section);
      setIsTyping(false);
      return;
    }

    if (cmd === "matrix") {
      setTimeout(() => {
        addOutput(
          <div
            key={`output-${Date.now()}`}
            className="mb-4 text-green-500 animate-pulse"
          >
            <p className="font-bold">
              Matrix mode activated. Welcome to the real world.
            </p>
            <pre className="text-xs md:text-sm overflow-x-auto my-2">
              {`
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
              `}
            </pre>
          </div>
        );
        setIsTyping(false);
      }, 800);
      return;
    }

    // Unknown command
    setTimeout(() => {
      addOutput(
        <div
          key={`output-${Date.now()}`}
          className="text-red-500 mb-4 animate-fadeIn"
        >
          Command not found: {command}. Type{" "}
          <span className="text-amber-600 dark:text-yellow-400 font-bold">
            help
          </span>{" "}
          for available commands.
        </div>
      );
      setIsTyping(false);
    }, 300);
  };

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = (
      <div key="welcome" className="space-y-2 mb-6 animate-fadeIn">
        <div className="text-emerald-600 dark:text-green-400 text-xl font-bold mb-2">
          Welcome to my interactive terminal portfolio!
        </div>
        <p className="text-slate-700 dark:text-gray-300">
          Type{" "}
          <span className="text-amber-600 dark:text-yellow-400 font-bold">
            help
          </span>{" "}
          to see available commands.
        </p>
      </div>
    );

    // Add with a slight delay for effect
    const timer = setTimeout(() => {
      addOutput(welcomeMessage);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CommandContext.Provider
      value={{
        activeSection,
        setActiveSection,
        commandHistory,
        addCommand,
        clearHistory,
        executeCommand,
        output,
        addOutput,
        clearOutput,
        historyIndex,
        setHistoryIndex,
        isTyping,
        setIsTyping,
      }}
    >
      {children}
    </CommandContext.Provider>
  );
}

export function useCommand() {
  const context = useContext(CommandContext);
  if (context === undefined) {
    throw new Error("useCommand must be used within a CommandProvider");
  }
  return context;
}
