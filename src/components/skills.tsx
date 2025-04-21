"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "HTML/CSS", level: 90, icon: "🌐" },
  { name: "JavaScript", level: 85, icon: "📜" },
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Next.js", level: 80, icon: "▲" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Express", level: 75, icon: "🚂" },
  { name: "MongoDB", level: 70, icon: "🍃" },
  { name: "PostgreSQL", level: 65, icon: "🐘" },
  { name: "GraphQL", level: 60, icon: "◼️" },
];

const otherSkills: Skill[] = [
  { name: "Git/GitHub", level: 85, icon: "🔄" },
  { name: "Docker", level: 65, icon: "🐳" },
  { name: "AWS", level: 60, icon: "☁️" },
  { name: "UI/UX Design", level: 75, icon: "🎯" },
  { name: "Testing", level: 70, icon: "🧪" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const skills = skillsRef.current;

    if (section && title && skills) {
      gsap.fromTo(
        title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate skill categories
      const categories = skills.querySelectorAll(".skill-category");
      gsap.fromTo(
        categories,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: skills,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate progress bars
      const progressBars = skills.querySelectorAll(".progress-bar-fill");
      gsap.fromTo(
        progressBars,
        { width: 0 },
        {
          width: "var(--progress-width)",
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skills,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="skill-category bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                Frontend
              </span>
            </h3>

            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className="progress-bar-fill h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                      style={
                        {
                          "--progress-width": `${skill.level}%`,
                        } as React.CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="bg-green-600 text-white p-2 rounded-lg mr-3">
                Backend
              </span>
            </h3>

            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className="progress-bar-fill h-full bg-gradient-to-r from-green-500 to-green-700 rounded-full"
                      style={
                        {
                          "--progress-width": `${skill.level}%`,
                        } as React.CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="skill-category bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="bg-purple-600 text-white p-2 rounded-lg mr-3">
                Other
              </span>
            </h3>

            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className="progress-bar-fill h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                      style={
                        {
                          "--progress-width": `${skill.level}%`,
                        } as React.CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
