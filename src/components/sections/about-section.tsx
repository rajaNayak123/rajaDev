"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FileText, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
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
      <div className="animate-in">
        <h2 className="text-2xl font-bold text-green-400 mb-2">About Me</h2>
        <div className="h-1 w-16 bg-green-500 mb-4"></div>
      </div>

      <div className="animate-in bg-green-900/20 border border-green-800 rounded-lg p-4 text-gray-300">
        <p className="mb-2 text-green-400 font-mono">$ cat about.txt</p>
        <p className="mb-4">
          I'm a passionate full-stack developer with a strong drive for creating
          impactful web applications. My journey in programming started after
          completing my 12th grade, tinkering with HTML and CSS to create simple
          websites. That curiosity evolved into a career where I now develop
          complex applications using modern technologies.
        </p>
        <p>
          When I'm not coding, you can find me reading tech blogs, listening to
          podcasts, or working out. I believe in continuous learning and pushing
          the boundaries of what's possible with code.
        </p>
      </div>

      <div className="animate-in grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-900/10 border border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-400 flex items-center mb-3">
            <BookOpen className="mr-2 h-5 w-5" />
            Education
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <div className="text-green-300">
                B.Tech in Computer Science and Engineering
              </div>
              <div className="text-sm text-gray-400">
                Polaris School Of Technology, 2023-2027
              </div>
            </li>
            <li>
              <div className="text-green-300">
                Frontend Development Bootcamp
              </div>
              <div className="text-sm text-gray-400">FunctionUp, 2023</div>
            </li>
          </ul>
        </div>

        <div className="bg-green-900/10 border border-green-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-400 flex items-center mb-3">
            <Award className="mr-2 h-5 w-5" />
            Experience
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <div className="text-green-300">AI SaaS Application</div>
              <div className="text-sm text-gray-400">
              Personal Project, Jan 2025 - Feb 2025
              </div>
            </li>
            <li>
              <div className="text-green-300">Anonymous Message</div>
              <div className="text-sm text-gray-400">
              Personal Project, Dec 2024 - Feb 2025
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="animate-in bg-green-900/10 border border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-400 mb-3">
          Personal Interests
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            Workout
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            mindfulness
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            Playing games
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            photo editing
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            Reading Tech Blogs
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            Travel
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            Listening podcasts
          </span>
          <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm text-center">
            Exploring nature
          </span>
        </div>
      </div>

      <div className="animate-in text-center">
        <Button
          variant="outline"
          className="border-green-700 text-green-400 hover:bg-green-900/20"
          onClick={() => window.open("https://drive.google.com/file/d/1GURtV3ZAqaAv_i_lACgRlPdoMiETRWQA/view?usp=sharing", "_blank")}
        >
          <FileText className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </div>
  );
}
