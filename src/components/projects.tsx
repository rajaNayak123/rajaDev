"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bug Exchange Marketplace",
    description:
      "A modern platform where developers can post bugs with bounties and earn money by fixing them",
    tags: [
      "Next.js",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Razorpay",
      "shadcn",
      "Zod",
    ],
    image: "/images/shoping.jpg",
    githubUrl: "https://github.com/rajaNayak123/BugExchangeMarketplace",
    liveUrl: "https://bug-exchange-marketplace.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Powered SaaS For Media Processing",
    description:
      "AI-powered SaaS application designed for real-time media optimization. It enhances media performance by reducing file sizes while maintaining high quality",
    tags: ["Next.js", "Clerk", "MongoDB", "Cloudinary", "Tailwind CSS"],
    image: "/images/saas.jpg",
    githubUrl: "https://github.com/rajaNayak123/cloudinary-saas",
    liveUrl: "https://cloudinary-saas-self.vercel.app/sign-up",
  },
  {
    id: 3,
    title: "Anonymous Feedback Porta",
    description:
      "A responsive portfolio website with animations and dark mode support.",
    tags: [
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

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (section && title && cards) {
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

      // Animate project cards
      const projectCards = cards.querySelectorAll(".project-card");
      gsap.fromTo(
        projectCards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Set up hover animations for each card
      projectCards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const image = cardElement.querySelector(
          ".project-image"
        ) as HTMLElement;
        const content = cardElement.querySelector(
          ".project-content"
        ) as HTMLElement;

        cardElement.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.05, duration: 0.3 });
          gsap.to(content, { y: -10, duration: 0.3 });
        });

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0.3 });
          gsap.to(content, { y: 0, duration: 0.3 });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-300"
                />
              </div>

              <div className="project-content p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  <Button size="sm" className="flex items-center gap-2" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
