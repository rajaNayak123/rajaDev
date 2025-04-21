"use client";

import type React from "react";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
          Contact
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-green-500 dark:to-blue-600 mb-4"></div>
      </motion.div>

      <motion.div
        className="bg-slate-100/80 dark:bg-green-900/20 border border-slate-200 dark:border-green-800 rounded-lg p-4 text-slate-700 dark:text-gray-300 mb-6 shadow-sm"
        variants={itemVariants}
      >
        <p className="mb-2 text-emerald-600 dark:text-green-400 font-mono">
          $ echo "Let's connect!"
        </p>
        <p>
          Have a project in mind or just want to chat? Feel free to reach out
          through the form below or via my contact information.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-slate-200 dark:bg-green-900/30 p-3 rounded-full mr-4">
              <Mail className="h-5 w-5 text-emerald-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-green-400">
                Email
              </h3>
              <a
                href="mailto:hello@example.com"
                className="text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-green-300 transition-colors"
              >
                nayakraja151@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-slate-200 dark:bg-green-900/30 p-3 rounded-full mr-4">
              <Phone className="h-5 w-5 text-emerald-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-green-400">
                Phone
              </h3>
              <a
                href="tel:+1234567890"
                className="text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-green-300 transition-colors"
              >
                +91 865-825-0208
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-slate-200 dark:bg-green-900/30 p-3 rounded-full mr-4">
              <MapPin className="h-5 w-5 text-emerald-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-green-400">
                Location
              </h3>
              <p className="text-slate-700 dark:text-gray-300">
                Gurugram, Haryana, India
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg p-4 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-medium text-slate-800 dark:text-green-400 mb-2">
              Availability
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Currently looking for internship opportunities both in frontend
              and backend development.
            </p>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/80 dark:bg-black/50 border border-slate-200 dark:border-green-800 rounded-lg p-4 shadow-sm"
          variants={itemVariants}
        >
          {isSubmitted ? (
            <motion.div
              className="bg-emerald-100 dark:bg-green-900/30 border border-emerald-200 dark:border-green-800 text-emerald-700 dark:text-green-300 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-sm mt-1">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-green-400 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-green-900 text-slate-800 dark:text-gray-300 focus:border-emerald-500 dark:focus:border-green-500 focus:ring-emerald-500 dark:focus:ring-green-500 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-green-400 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-green-900 text-slate-800 dark:text-gray-300 focus:border-emerald-500 dark:focus:border-green-500 focus:ring-emerald-500 dark:focus:ring-green-500 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-green-400 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-green-900 text-slate-800 dark:text-gray-300 focus:border-emerald-500 dark:focus:border-green-500 focus:ring-emerald-500 dark:focus:ring-green-500 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-green-600 dark:to-blue-700 hover:from-emerald-600 hover:to-blue-600 dark:hover:from-green-700 dark:hover:to-blue-800 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </>
          )}
        </motion.form>
      </div>

      <motion.div
        className="text-center text-slate-500 dark:text-gray-500 text-sm"
        variants={itemVariants}
      >
        <p>Response time: Usually within 24-48 hours</p>
      </motion.div>
    </motion.div>
  );
}
