"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useCommand } from "../command-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
  const { executeCommand } = useCommand();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-in");

      gsap.fromTo(
        elements,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="py-4 space-y-6 max-w-3xl mx-auto">
      <div className="animate-in text-center">
        <pre className="text-green-500 text-xs md:text-sm overflow-x-auto">
          {`
 _____                 _                         _____           _    __      _ _       
|  __ \\               | |                       |  __ \\         | |  / _|    | (_)      
| |  | | _____   _____| | ___  _ __   ___ _ __  | |__) |__  _ __| |_| |_ ___ | |_  ___  
| |  | |/ _ \\ \\ / / _ \\ |/ _ \\| '_ \\ / _ \\ '__| |  ___/ _ \\| '__| __|  _/ _ \\| | |/ _ \\ 
| |__| |  __/\\ V /  __/ | (_) | |_) |  __/ |    | |  | (_) | |  | |_| || (_) | | | (_) |
|_____/ \\___| \\_/ \\___|_|\\___/| .__/ \\___|_|    |_|   \\___/|_|   \\__|_| \\___/|_|_|\\___/ 
                              | |                                                       
                              |_|                                                       
`}
        </pre>
      </div>

      <div className="animate-in space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400">
          Hello, I&apos;m <span className="text-green-300">Raja Nayak</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Full Stack Developer | Software developer | Problem Solver
        </p>
        <div className="h-1 w-20 bg-green-500 mx-auto"></div>
      </div>

      <div className="animate-in bg-green-900/20 border border-green-800 rounded-lg p-4 text-gray-300">
        <p className="mb-2 text-green-400 font-mono">$ whoami</p>
        <p>
          I build modern web applications with a focus on clean code,
          performance and user experience. I&apos;am passionate about full-stack
          development and love turning complex problems into elegant functional
          solutions.
        </p>
      </div>

      <div className="animate-in grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="border-green-700 text-green-400 hover:bg-green-900/20"
          onClick={() => executeCommand("projects")}
        >
          View Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          className="border-green-700 text-green-400 hover:bg-green-900/20"
          onClick={() => window.open("https://drive.google.com/file/d/1GURtV3ZAqaAv_i_lACgRlPdoMiETRWQA/view?usp=sharing", "_blank")}
        >
          My Resume <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="animate-in text-center text-gray-500 text-sm">
        <p>
          Type <span className="text-yellow-400">help</span> to see available
          commands
        </p>
      </div>
    </div>
  );
}
