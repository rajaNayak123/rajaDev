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
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNav() {
  const { activeSection, executeCommand } = useCommand();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleNavClick = (section: string) => {
    executeCommand(section);
    setOpen(false);
  };

  return (
    <div className="border-b border-green-800 p-4 flex items-center justify-between bg-black dark:bg-gray-900">
      <div className="flex items-center">
        <img
          src="/images/rajimg.jpg"
          alt="Developer Avatar"
          className="h-8 w-8 rounded-full mr-2 border border-green-500"
        />
        <div>
          <h1 className="text-sm font-bold text-green-400">Raja Nayak</h1>
          <p className="text-xs text-gray-400">Fullstack Developer</p>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-green-500">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-black border-green-800 text-green-500 p-0"
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-green-800">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/images/rajimg.jpg"
                  alt="Developer Avatar"
                  className="h-20 w-20 rounded-full border-2 border-green-500"
                />
              </div>
              <h1 className="text-lg font-bold text-green-400 text-center">
                Raja Nayak
              </h1>
              <p className="text-sm text-gray-400 text-center">
                Full Stack Developer
              </p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "home"
                    ? "bg-green-900/20 text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
                onClick={() => handleNavClick("home")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "about"
                    ? "bg-green-900/20 text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
                onClick={() => handleNavClick("about")}
              >
                <User className="mr-2 h-4 w-4" />
                About
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "projects"
                    ? "bg-green-900/20 text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
                onClick={() => handleNavClick("projects")}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "skills"
                    ? "bg-green-900/20 text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
                onClick={() => handleNavClick("skills")}
              >
                <Code className="mr-2 h-4 w-4" />
                Skills
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeSection === "contact"
                    ? "bg-green-900/20 text-green-400"
                    : "text-gray-400 hover:text-green-400"
                }`}
                onClick={() => handleNavClick("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </nav>

            <div className="p-4 border-t border-green-800 space-y-4">
              <div className="flex justify-center space-x-2">
                <a
                  href="https://github.com/rajaNayak123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-green-700 text-gray-400 hover:text-green-400"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/raja-nayak8658/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-green-700 text-gray-400 hover:text-green-400"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/raja-nayak8658/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full  border-green-700 text-gray-400 hover:text-green-400"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </a>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full border-green-700 text-gray-400 hover:text-green-400"
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
    </div>
  );
}
