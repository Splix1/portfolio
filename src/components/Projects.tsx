'use client';

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface ProjectLinks {
  github: string;
  live: string;
}

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  links: ProjectLinks;
  image: string;
}

const projects: Project[] = [
  {
    title: "noDoom",
    description: "A social media feed aggregator designed to prevent doomscrolling by providing curated content on a cooldown timer.",
    details: [
      "Aggregates social media feeds in a limited manner to help prevent doomscrolling",
      "Provides a curated feed with a reasonable amount of posts on a 6 hour cooldown",
      "Currently supports Bluesky, with Reddit integration coming soon",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Bluesky API",
      "Reddit API",
      "Vercel",
      "C#",
      "ASP.NET",
      "Redis",
      "Supabase",
      "Docker"
    ],
    links: {
      github: "https://github.com/Splix1/noDoom",
      live: "",
      // live: "https://no-doom.com",
    },
    image: "/projects/nodoom.png",
  },
  {
    title: "gitTogether",
    description: "A web application to find new projects and developers to work with in one place, featuring GitHub integration for seamless collaboration.",
    details: [
      "Implemented GitHub OAuth for user authentication and repository integration",
      "Built real-time notifications system for project requests and team communications",
      "Created project-specific chat rooms, team chats, and direct messaging features",
      "Developed language-based project filtering and beginner-friendly project tags"
    ],
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "CSS/SCSS",
      "GitHub API",
      "WebSockets"
    ],
    links: {
      github: "https://github.com/gitTogether-capstone/gittogether",
      live: "https://gittogether-gokq.onrender.com/"
    },
    image: "/projects/gittogether.png"
  },
  {
    title: "Hoalistic",
    description: "A comprehensive HOA budget management web application with integrated cost and revenue analysis tools.",
    details: [
      "Created a cost and revenue analysis tool by integrating Plaid for real-time bank transaction data",
      "Developed and launched an HOA budget management web app with React and Supabase",
      "Implemented data visualization using Plotly.js for financial analytics",
      "Built responsive UI components using Material UI for improved user experience"
    ],
    technologies: [
      "JavaScript",
      "React",
      "TypeScript",
      "Material UI",
      "Plotly.js",
      "Supabase",
      "Plaid API"
    ],
    links: {
      github: "https://github.com/Splix1/Hoalistic",
      live: ""
    },
    image: "/projects/hoalistic.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-start p-4"
              >
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <div className="relative w-full h-[200px] sm:h-[300px]">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-gray-400">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/5 px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 