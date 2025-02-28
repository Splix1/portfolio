'use client';

import { motion } from "framer-motion";

const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "SQL",
  ],
  frontend: [
    "React",
    "Next.js",
    "React Native",
    "HTML/CSS",
    "Redux",
    "Material UI",
  ],
  backend: [
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    ".NET",
    "Entity Framework",
    "Redis",
  ],
  tools: [
    "Git",
    "AWS",
    "Docker",
    "Jest",
    "xUnit",
    "Selenium",
    "Supabase"
  ],
};

export default function About() {
  return (
    <section id="about" className="relative py-20 min-h-screen flex items-center backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 font-mono">Hi there!</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 leading-relaxed mb-6">
                I&apos;m Austin, a software engineer, previously software engineer at Criterium Engineers, software engineer mentor at Fullstack Academy, and former freelance fullstack developer.
                With a strong foundation in frontend and backend development, I create elegant
                solutions that solve real-world problems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I enjoy working with cutting-edge technologies and am constantly learning
                new tools and techniques to improve my craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-300">Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 