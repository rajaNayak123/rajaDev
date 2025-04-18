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
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function Sidebar() {
  const { activeSection, setActiveSection, executeCommand } = useCommand();
  const { theme, setTheme } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current.querySelectorAll(".nav-item"),
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  const handleNavClick = (section: string) => {
    executeCommand(section);
  };

  return (
    <div
      ref={sidebarRef}
      className="w-64 border-r border-green-800 p-4 flex flex-col justify-between bg-black dark:bg-gray-900"
    >
      <div>
        <div className="mb-8 text-center">
          <div className="inline-block rounded-full border-2 border-green-500 p-1 mb-4">
            <Image
              src="/images/rajimg.jpg"
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover"
              width={56} 
              height={96} 
            />
          </div>
          <h1 className="text-xl font-bold text-green-400">Raja Nayak</h1>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </div>

        <nav className="space-y-2">
          <Button
            variant="ghost"
            className={`w-full justify-start nav-item ${
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
            className={`w-full justify-start nav-item ${
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
            className={`w-full justify-start nav-item ${
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
            className={`w-full justify-start nav-item ${
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
            className={`w-full justify-start nav-item ${
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
      </div>

      <div className="space-y-4">
        <div className="flex justify-center space-x-2 nav-item">
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
          className="w-full border-green-700 text-gray-400 hover:text-green-400 nav-item"
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
  );
}
