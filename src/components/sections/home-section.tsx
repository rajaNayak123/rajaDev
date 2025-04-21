"use client"

import { useRef } from "react"
import { useCommand } from "../command-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"

export default function HomeSection() {
  const { executeCommand } = useCommand()
  const sectionRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      ref={sectionRef}
      className="py-4 space-y-6 max-w-3xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <pre className="text-emerald-600 dark:text-green-500 text-xs md:text-sm overflow-x-auto">
          {`
 _____                 _                         _____           _    __      _ _       
|  __ \\               | |                       |  __ \\         | |  / _|    | (_)      
| |  | | _____   _____| | ___  _ __   ___ _ __  | |__) |__  _ __| |_| |_ ___ | |_  ___  
| |  | |/ _ \\ \\ / / _ \\ |/ _ \\| '_ \\ / _ \\ '__| |  ___/ _ \\| '__| __|  _/ _ \\| | |/ _ \\ 
| |__| |  __/\\ V /  __/ | (_) | |_) |  __/ |    | |  | (_) | |  | |_| || (_) | | | (_) |
|_____/ \\___| \\_/ \\___|_|\\___/| .__/ \\___|_|    |_|   \\___/|_|   \\__|_| \\___/|_|_|\\___/ 
                              | |                                                       
                              |_|                                                       
`}
        </pre>
      </motion.div>

      <motion.div className="space-y-4 text-center" variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-green-400">
          Hello, I'm <span className="text-emerald-600 dark:text-green-300">Raja Nayak</span>
        </h1>
        <div className="h-6 text-slate-700 dark:text-gray-300 text-lg">
          <TypewriterComponent
            options={{
              strings: ["Full Stack Developer", "Problem Solver", "Tech Explorer"],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-green-500 dark:to-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        className="bg-slate-100/80 dark:bg-green-900/20 border border-slate-200 dark:border-green-800 rounded-lg p-4 text-slate-700 dark:text-gray-300 shadow-sm"
        variants={itemVariants}
      >
        <p className="mb-2 text-emerald-600 dark:text-green-400 font-mono">$ whoami</p>
        <p>
        I build modern websites that work well and look great. I focus on writing good code that's easy to understand and runs smoothly. I'm good at taking tricky problems and finding simple solutions that make websites better for people to use.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
        <Button
          variant="outline"
          className="border-slate-300 hover:border-emerald-500 dark:border-green-800 dark:hover:border-green-600 text-slate-800 hover:text-emerald-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-slate-100 dark:hover:bg-green-900/30 transition-all duration-300 group"
          onClick={() => executeCommand("projects")}
        >
          View Projects{" "}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>

        <Button
          variant="outline"
          className="border-slate-300 hover:border-emerald-500 dark:border-green-800 dark:hover:border-green-600 text-slate-800 hover:text-emerald-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-slate-100 dark:hover:bg-green-900/30 transition-all duration-300 group"
          onClick={() => window.open("https://drive.google.com/file/d/1GLiKGxRDKD0ym0DxTButxj4HBvvipPXl/view?usp=sharing", "_blank")}
        >
          View Resume <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>

      <motion.div className="text-center text-slate-500 dark:text-gray-500 text-sm" variants={itemVariants}>
        <p>
          Type <span className="text-amber-600 dark:text-yellow-400 font-bold">help</span> to see available commands
        </p>
      </motion.div>
    </motion.div>
  )
}
