"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-in")

      gsap.fromTo(
        elements,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
      )
    }
  }, [])

  return (
    <div ref={sectionRef} className="py-4 space-y-6 max-w-3xl mx-auto">
      <div className="animate-in">
        <h2 className="text-2xl font-bold text-green-400 mb-2">Contact</h2>
        <div className="h-1 w-16 bg-green-500 mb-4"></div>
      </div>

      <div className="animate-in bg-green-900/20 border border-green-800 rounded-lg p-4 text-gray-300 mb-6">
        <p className="mb-2 text-green-400 font-mono">$ echo Let&apos;s connect!</p>
        <p>
          Have a project in mind or just want to chat? Feel free to reach out through the form below or via my contact
          information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="animate-in space-y-6">
          <div className="flex items-start">
            <div className="bg-green-900/30 p-3 rounded-full mr-4">
              <Mail className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-400">Email</h3>
              <a href="mailto:hello@example.com" className="text-gray-300 hover:text-green-400">
                nayakraja151@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-900/30 p-3 rounded-full mr-4">
              <Phone className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-400">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-300 hover:text-green-400">
                +91 865-825-0208
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-900/30 p-3 rounded-full mr-4">
              <MapPin className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-400">Location</h3>
              <p className="text-gray-300">Gurugram, Haryana, India</p>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-800 rounded-lg p-4">
            <h3 className="text-lg font-medium text-green-400 mb-2">Availability</h3>
            <p className="text-gray-300">Currently looking for internship opportunities in frontend and backend development</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="animate-in space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-green-900/10 border-green-800 text-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-green-900/10 border-green-800 text-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="bg-green-900/10 border-green-800 text-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>

      <div className="animate-in text-center text-gray-500 text-sm">
        <p>Response time: Usually within 24-48 hours</p>
      </div>
    </div>
  )
}
