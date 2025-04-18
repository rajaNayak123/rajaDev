"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    technologies: ["Next.js", "Auth.js", "MongoDB", "ImageKit", "Razorpay"],
    image: "/images/shoping.jpg",
    githubUrl: "https://github.com/rajaNayak123/sellingPlatform",
    liveUrl: "https://selling-platform.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Powered SaaS For Media Processing",
    description:
      "AI-powered SaaS application designed for real-time media optimization. it enhances media performance by reducing file sizes while maintaining high quality.",
    technologies: ["Next.js", "Clerk", "MongoDB", "Prisma", "Cloudinary"],
    image: "/images/saas.jpg",
    githubUrl: "https://github.com/rajaNayak123/cloudinary-saas",
    liveUrl: "https://cloudinary-saas-self.vercel.app/sign-up",
  },
  {
    id: 3,
    title: "Anonymous Feedback Portal",
    description:
      "privacy-first feedback platform built with Next.js. It enables anonymous users to communicate safely while maintaining full control over their data. ",
    technologies: [
      "Next.js",
      "NextAuth.js",
      "Resend",
      "MongoDB",
      "Zod",
      "Shadcn",
    ],
    image: "/images/messageimg.jpg",
    githubUrl: "https://github.com/rajaNayak123/AnonymousTalk",
    liveUrl: "https://anonymous-talk.vercel.app/sign-up",
  },
];

export default function ProjectsSection() {
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
        <h2 className="text-2xl font-bold text-green-400 mb-2">Projects</h2>
        <div className="h-1 w-16 bg-green-500 mb-4"></div>
      </div>

      <div className="animate-in bg-green-900/20 border border-green-800 rounded-lg p-4 text-gray-300 mb-6">
        <p className="mb-2 text-green-400 font-mono">$ ls -la projects/</p>
        <p>
          Here are some of my recent projects. Each one represents a unique
          challenge and learning experience. Click on the links to view the
          source code or live demos.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="animate-in bg-green-900/10 border border-green-800 rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-b"></div>
              </div>

              <div className="p-4 md:w-2/3">
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-900/30 text-green-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-400 hover:bg-green-900/20"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-700 text-green-400 hover:bg-green-900/20"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-in text-center text-gray-500 text-sm">
        <p>
          More projects available on my{" "}
          <a
            href="https://github.com/rajaNayak123"
            className="text-green-400 hover:underline"
          >
            GitHub profile
          </a>
        </p>
      </div>
    </div>
  );
}
