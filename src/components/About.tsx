import React from "react";
import { motion } from "framer-motion";
import { Target, BookOpen, Star, Heart } from "lucide-react";

const About = () => {
  const sections = [
    {
      title: "Who I Am",
      icon: BookOpen,
      content:
        "A dedicated developer with a passion for creating innovative solutions...",
    },
    {
      title: "My Journey",
      icon: Target,
      content: "Started my journey in tech with a curiosity for how things work...",
    },
    {
      title: "Skills & Expertise",
      icon: Star,
      content:
        "Specialized in modern web technologies including React, TypeScript, and Node.js...",
    },
    {
      title: "What Drives Me",
      icon: Heart,
      content:
        "The endless possibilities of technology and its power to make a positive impact...",
    },
  ];

  return (
    <div className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        {/* Floating Particles */}
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute top-10 left-20 w-4 h-4 bg-blue-400 rounded-full shadow-lg opacity-50 blur-md"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-500 rounded-full shadow-lg opacity-50 blur-lg"></div>
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full shadow-lg opacity-50 blur-md"></div>
        </div>
      </div>

      {/* Content Wrapper */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </motion.h2>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="relative group p-[2px] rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-md h-full overflow-hidden">
                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="flex items-center mb-4">
                  {/* Icon with Bounce Animation */}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 1.5,
                    }}
                  >
                    <section.icon className="w-8 h-8 text-blue-400 mr-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looking Ahead Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative glass-effect rounded-lg p-10 backdrop-blur-2xl shadow-xl bg-gradient-to-r from-purple-500 to-blue-500/20 border border-white/10">
            {/* Floating Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-all"></div>

            <h3 className="text-2xl font-bold mb-4 text-white text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Looking Ahead
              </span>
            </h3>
            <p className="text-gray-200 leading-relaxed text-center">
              My goal is to continue growing as a developer while contributing to meaningful projects...
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
