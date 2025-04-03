import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, Instagram } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:flowenol0.7@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/flowenol03",
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prathamesh-khandekar-414b81256",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/its_hsemahtarp_0.3",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white py-20 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 glitch"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
            Touch
          </span>
        </motion.h2>

        {/* Contact Card with Glassmorphism Effect */}
        <motion.div
          className="relative bg-gray-800/80 rounded-2xl p-12 shadow-lg backdrop-blur-md border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Floating Neon Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60"></div>

          <div className="relative z-10">
            <p className="text-xl text-gray-300 text-center mb-12">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>

            {/* Social Media Icons */}
            <motion.div
              className="flex justify-center space-x-10 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 ${link.color}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    whileHover={{
                      y: [-5, 5, -5],
                      transition: { duration: 0.6, repeat: Infinity },
                    }}
                  >
                    <link.icon className="w-12 h-12 drop-shadow-lg" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Download CV Button with Neon Hover Effect */}
            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <a
                href="https://drive.google.com/file/d/14lw2SU3fhI03yq6EUX-f0YD5_L_NwCoO/view?usp=sharing"
                className="relative inline-flex items-center px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-pink-600 transform scale-105 opacity-70 blur-lg transition-all duration-300 group-hover:opacity-100"></span>
                <span className="relative flex items-center z-10">
                  <FileText className="w-6 h-6 mr-2" /> Download CV
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
