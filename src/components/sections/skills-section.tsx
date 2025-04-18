"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 60 },
      { name: "MongoDB", level: 60 },
      { name: "MySQL", level: 55 },
      { name: "Prisma", level: 50 },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Postman", level: 60 },
    ],
  },
];

export default function SkillsSection() {
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

      // Animate skill bars
      const skillBars = sectionRef.current.querySelectorAll(".skill-bar");
      gsap.fromTo(
        skillBars,
        { width: 0 },
        {
          width: "var(--skill-level)",
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="py-4 space-y-6 max-w-3xl mx-auto">
      <div className="animate-in">
        <h2 className="text-2xl font-bold text-green-400 mb-2">Skills</h2>
        <div className="h-1 w-16 bg-green-500 mb-4"></div>
      </div>

      <div className="animate-in bg-green-900/20 border border-green-800 rounded-lg p-4 text-gray-300 mb-6">
        <p className="mb-2 text-green-400 font-mono">$ cat skills&rsquo;json</p>
        <p>
          Here&apos;s a breakdown of my technical skills and proficiency levels. I&apos;m
          constantly learning and adding new technologies to my toolkit.
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="animate-in">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              {category.name}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-green-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
                    <div
                      className="skill-bar h-full bg-green-500 rounded-full"
                      style={
                        {
                          "--skill-level": `${skill.level}%`,
                        } as React.CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="animate-in">
        <h3 className="text-xl font-semibold text-green-400 mb-4">
          Tools & Technologies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "VS Code",
            "Git",
            "GitHub",
            "npm",
            "Docker",
            "Postman",
            "Vercel",
            "Cloudinary"
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-green-900/20 border border-green-800 rounded-lg p-3 text-center text-gray-300"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      <div className="animate-in text-center text-gray-500 text-sm">
        <p>Always learning new technologies and improving existing skills</p>
      </div>
    </div>
  );
}
