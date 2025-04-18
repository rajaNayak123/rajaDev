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
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

export function CommandProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<JSX.Element[]>([]);

  const addCommand = (command: string) => {
    setCommandHistory((prev) => [...prev, command]);
  };

  const clearHistory = () => {
    setCommandHistory([]);
  };

  const addOutput = (newOutput: JSX.Element) => {
    setOutput((prev) => [...prev, newOutput]);
  };

  const clearOutput = () => {
    setOutput([]);
  };

  const executeCommand = (command: string) => {
    addCommand(command);

    const cmd = command.trim().toLowerCase();

    if (cmd === "clear" || cmd === "cls") {
      clearOutput();
      return;
    }

    if (cmd === "help") {
      addOutput(
        <div key={`output-${Date.now()}`} className="mb-2 text-gray-300">
          <p className="text-yellow-400 font-bold">Available commands:</p>
          <p>
            <span className="text-blue-400">home</span> - View the welcome
            screen
          </p>
          <p>
            <span className="text-blue-400">about</span> - Learn about me
          </p>
          <p>
            <span className="text-blue-400">projects</span> - View my projects
          </p>
          <p>
            <span className="text-blue-400">skills</span> - See my technical
            skills
          </p>
          <p>
            <span className="text-blue-400">contact</span> - Get in touch with
            me
          </p>
          <p>
            <span className="text-blue-400">clear</span> - Clear the terminal
          </p>
          <p>
            <span className="text-blue-400">theme</span> - Toggle light/dark
            mode
          </p>
        </div>
      );
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
      return;
    }

    // Unknown command
    addOutput(
      <div key={`output-${Date.now()}`} className="text-red-500 mb-2">
        Command not found: {command}. Type{" "}
        <span className="text-yellow-400">help</span> for available commands.
      </div>
    );
  };

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = (
      <div key="welcome" className="space-y-2 mb-4">
        <div className="text-green-400 text-xl font-bold mb-2">
          Welcome to my interactive terminal portfolio!
        </div>
        <p className="text-gray-300">
          Type <span className="text-yellow-400">help</span> to see available
          commands.
        </p>
      </div>
    );

    // Add with a slight delay for effect
    const timer = setTimeout(() => {
      addOutput(welcomeMessage);
    }, 500);

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
