'use client';

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Splix1",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/austin-gautney",
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 font-mono">Get In Touch</h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I&apos;m currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:austinTgautney@gmail.com"
              className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Send Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 