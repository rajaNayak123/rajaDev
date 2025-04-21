"use client";

import { useRef } from "react";
import { FileText, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutSection() {
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
          About Me
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-green-500 dark:to-blue-600 mb-4"></div>
      </motion.div>

      <motion.div
        className="bg-slate-100/80 dark:bg-green-900/20 border border-slate-200 dark:border-green-800 rounded-lg p-4 text-slate-700 dark:text-gray-300 shadow-sm"
        variants={itemVariants}
      >
        <p className="mb-2 text-emerald-600 dark:text-green-400 font-mono">
          $ cat about.txt
        </p>
        <p className="mb-4">
          I'm a passionate full-stack developer driven by curiosity and
          creativity. My coding journey began after completing my 12th grade,
          tinkering with HTML and CSS to create simple websites. That curiosity
          evolved into a career where I now develop complex applications using
          modern technologies.
        </p>
        <p>
          When I'm not coding, you can find me working out at the gym, playing
          strategy games, or reading tech blogs. I believe in continuous
          learning and pushing the boundaries of what's possible with code.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={itemVariants}
      >
        <motion.div
          className="bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-green-400 flex items-center mb-3">
            <BookOpen className="mr-2 h-5 w-5" />
            Education
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-gray-300">
            <li>
              <div className="text-emerald-600 dark:text-green-300">
                Bachelor of Technology in Computer Science and Engineering
              </div>
              <div className="text-sm text-slate-500 dark:text-gray-400">
                Polaris School Of Technology, 2023-2027
              </div>
            </li>
            <li>
              <div className="text-emerald-600 dark:text-green-300">
                Frontend Development Bootcamp
              </div>
              <div className="text-sm text-slate-500 dark:text-gray-400">
                FunctionUP, 2023
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-green-400 flex items-center mb-3">
            <Award className="mr-2 h-5 w-5" />
            Experience
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-gray-300">
            <li>
              <div className="text-emerald-600 dark:text-green-300">
              AI-powered SaaS 
              </div>
              <div className="text-sm text-slate-500 dark:text-gray-400">
                Personal Project, Jan 2025 - Feb 2025
              </div>
            </li>
            <li>
              <div className="text-emerald-600 dark:text-green-300">
              Anonymous Message Platform 
              </div>
              <div className="text-sm text-slate-500 dark:text-gray-400">
              Personal Project, Dec 2024 - Feb 2025
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg p-4 shadow-sm"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-slate-800 dark:text-green-400 mb-3">
          Personal Interests
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "Walking",
            "Playing games",
            "Photo Editing",
            "Listening podcasts",
            "Workout",
            "mindfulness",
            "Reading Tech Blogs",
            "Explore new Tech",
          ].map((interest, index) => (
            <motion.span
              key={index}
              className="bg-slate-100 dark:bg-green-900/30 text-emerald-600 dark:text-green-300 px-3 py-1 rounded-full text-sm text-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(16, 185, 129, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div className="text-center" variants={itemVariants}>
        <Button
          variant="outline"
          className="border-slate-300 hover:border-emerald-500 dark:border-green-800 dark:hover:border-green-600 text-slate-800 hover:text-emerald-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-slate-100 dark:hover:bg-green-900/30 transition-all duration-300 group"
          onClick={() => window.open("https://drive.google.com/file/d/1f0GYickFM4kY2Fm-lWlWMTjCAcowCGCE/view?usp=sharing", "_blank")}
        >
          <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
          Download Resume
        </Button>
      </motion.div>
    </motion.div>
  );
}
