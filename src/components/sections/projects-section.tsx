"use client";

import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Image Marketplace",
    description:
      "A full-featured online store with payment processing, user authentication, and admin dashboard.",
    technologies: [
      "Next.js",
      "Auth.js",
      "MongoDB",
      "ImageKit",
      "Razorpay",
      "Nodemailer",
    ],
    image: "/images/shoping.jpg",
    githubUrl: "https://github.com/rajaNayak123/sellingPlatform",
    liveUrl: "https://selling-platform.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Powered SaaS For Media Processing",
    description:
      "AI-powered SaaS application designed for real-time media optimization. It enhances media performance by reducing file sizes while maintaining high quality",
    technologies: ["Next.js", "Clerk", "MongoDB", "Cloudinary", "Tailwind CSS"],
    image: "/images/saas.jpg",
    githubUrl: "https://github.com/rajaNayak123/cloudinary-saas",
    liveUrl: "https://anonymous-talk.vercel.app/",
  },
  {
    id: 3,
    title: "Anonymous Feedback Porta",
    description:
      "A responsive portfolio website with animations and dark mode support.",
    technologies: [
      "Next.js",
      "NextAuth.js",
      "Resend",
      "MongoDB",
      "Zod",
      "ailwind CSS",
      "shadcn",
    ],
    image: "/images/messageimg.jpg",
    githubUrl: "https://github.com/rajaNayak123/AnonymousTalk",
    liveUrl: "https://anonymous-talk.vercel.app/",
  },
];

export default function ProjectsSection() {
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
          Projects
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-green-500 dark:to-blue-600 mb-4"></div>
      </motion.div>

      <motion.div
        className="bg-slate-100/80 dark:bg-green-900/20 border border-slate-200 dark:border-green-800 rounded-lg p-4 text-slate-700 dark:text-gray-300 mb-6 shadow-sm"
        variants={itemVariants}
      >
        <p className="mb-2 text-emerald-600 dark:text-green-400 font-mono">
          $ ls -la projects/
        </p>
        <p>
          Here are some of my recent projects. Each one represents a unique
          challenge and learning experience. Click on the links to view the
          source code or live demos.
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-b"></div>
              </div>

              <div className="p-4 md:w-2/3">
                <h3 className="text-xl font-bold text-slate-800 dark:text-green-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-slate-100 dark:bg-green-900/30 text-emerald-600 dark:text-green-300 px-2 py-1 rounded-md text-xs"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 hover:border-emerald-500 dark:border-green-800 dark:hover:border-green-600 text-slate-800 hover:text-emerald-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-slate-100 dark:hover:bg-green-900/30 transition-all duration-300 group"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 hover:border-emerald-500 dark:border-green-800 dark:hover:border-green-600 text-slate-800 hover:text-emerald-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-slate-100 dark:hover:bg-green-900/30 transition-all duration-300 group"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center text-slate-500 dark:text-gray-500 text-sm"
        variants={itemVariants}
      >
        <p>
          More projects available on my{" "}
          <a
            href="https://github.com/rajaNayak123"
            className="text-emerald-600 dark:text-green-400 hover:underline"
          >
            GitHub profile
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
