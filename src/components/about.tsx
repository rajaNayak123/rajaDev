"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current
    const image = imageRef.current

    if (section && title && content && image) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      tl.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(image, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    }

    return () => {
      if (section) {
        const trigger = ScrollTrigger.getById(section.id)
        if (trigger) trigger.kill()
      }
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Working at desk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          </div>

          <div ref={contentRef} className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Full Stack Developer with 5+ years of experience
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate developer who loves creating beautiful, functional, and user-friendly websites and
              applications. With expertise in both frontend and backend technologies, I deliver complete solutions that
              meet client needs.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My journey in web development started when I built my first website at 16. Since then, I've worked with
              startups and established companies to bring their digital visions to life.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">B.S. Computer Science, Tech University</p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">5+ years in web development</p>
              </div>
            </div>

            <Button className="mt-6 flex items-center gap-2"
            onClick={() => window.open("https://drive.google.com/file/d/1cOt7yf4nIpHqT6N69YQvLA0RermCGWwf/view?usp=sharing", "_blank")}
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
