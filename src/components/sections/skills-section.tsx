"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  color: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "from-emerald-500 to-blue-500 dark:from-green-500 dark:to-blue-600",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Backend",
    color: "from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 65 },
      { name: "Prisma", level: 60 },
    ],
  },
  {
    name: "Other",
    color: "from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Postman", level: 60 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="py-4 space-y-6 max-w-3xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-green-400 mb-2">
          Skills
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-green-500 dark:to-blue-600 mb-4"></div>
      </motion.div>

      <motion.div
        className="bg-slate-100/80 dark:bg-green-900/20 border border-slate-200 dark:border-green-800 rounded-lg p-4 text-slate-700 dark:text-gray-300 mb-6 shadow-sm"
        variants={itemVariants}
      >
        <p className="mb-2 text-emerald-600 dark:text-green-400 font-mono">
          $ cat skills.json
        </p>
        <p>
          Here's a breakdown of my technical skills and proficiency levels. I'm
          constantly learning and adding new technologies to my toolkit.
        </p>
      </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-green-400 mb-4">
              {category.name}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-emerald-600 dark:text-green-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-green-900/30 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + skillIndex * 0.1,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-green-400 mb-4">
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
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg p-3 text-center text-slate-700 dark:text-gray-300 shadow-sm"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center text-slate-500 dark:text-gray-500 text-sm"
        variants={itemVariants}
      >
        <p>Always learning new technologies and improving existing skills</p>
      </motion.div>
    </motion.div>
  );
}
