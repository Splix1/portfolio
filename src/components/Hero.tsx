'use client';

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-light tracking-wide"
        >
          <span className="font-normal">Austin</span>{" "}
          <span className="text-gray-400">Gautney</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-2xl text-gray-200">Software Engineer</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex items-center justify-center space-x-6 text-gray-400"
        >
          <a 
            href="https://github.com/Splix1" 
            className="hover:text-white transition-colors flex items-center gap-2 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="/resume.pdf" 
            className="hover:text-white transition-colors flex items-center gap-2 group"
          >
            <FiFileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Resume/CV</span>
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://linkedin.com/in/austin-gautney" 
            className="hover:text-white transition-colors flex items-center gap-2 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
} 