'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Criterium Engineers",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Refactored approximately 70 React/TypeScript components by upgrading multiple MUI versions and other libraries, enhancing code maintainability and overall performance",
      "Designed and defined project timelines for a component‑based PDF builder and generator, leveraging AWS ECS for a containerized API and S3 for scalable storage",
      "Resolved over 80% of user‑reported production issues—including data errors and application‑breaking bugs—using AWS",
      "Integrated Redux into an Expo‑based React Native app, optimizing state management and improving responsiveness",
      "Developed unit tests for React/TypeScript components using Jest, improving code reliability"
    ],
    technologies: ["TypeScript", "React", "React Native", "AWS", "Jest", "Material UI"]
  },
  {
    title: "Software Engineer Mentor",
    company: "Fullstack Academy",
    period: "Aug 2022 - Dec 2023",
    description: [
      "Achieved a 40% increase in mentor productivity, training a proficient team of 10 new hires in 2 weeks",
      "Led project teams of 4‑5 engineers, resulting in successful deployment and hands‑on mentorship in software development fundamentals",
      "Facilitated mock interview workshops for 200+ students using REACTO problems, guiding discussions on challenges and solutions in data structures and algorithms",
    ],
    technologies: ["React", "Node.js", "JavaScript", "PostgreSQL", "Express"]
  },
  {
    title: "Software Engineer",
    company: "Hoalistic",
    period: "May 2022 - Sep 2022",
    description: [
      "Created a cost and revenue analysis tool by integrating Plaid for real‑time bank transaction data",
      "Developed and launched an HOA budget management web app with React, Supabase, and Heroku, consistently meeting deadlines",
      "Participated in weekly meetings to define requirements & features, ensuring project deadlines were met"
    ],
    technologies: ["JavaScript", "React", "Supabase", "Heroku", "Material UI", "Plotly.js"]
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
                  <p className="text-indigo-400">{exp.company}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400">
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 