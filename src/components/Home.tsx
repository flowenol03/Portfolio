import React from 'react';
import { motion } from "framer-motion";
import { Code, Brush, Brain, Coffee, ChevronDown } from 'lucide-react';

const profileImg = new URL('../images/IMG_1346.JPG', import.meta.url).href;

const Home = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, progress: 90 },
    { name: 'UI/UX Design', icon: Brush, progress: 85 },
    { name: 'Problem Solving', icon: Brain, progress: 95 },
    { name: 'Quick Learning', icon: Coffee, progress: 88 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <motion.h2
                className="text-lg text-blue-400 font-medium mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Welcome to my portfolio
              </motion.h2>
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Prathamesh</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                A passionate developer crafting creative and functional web experiences.
              </motion.p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-6 h-6 text-blue-400 mr-2" />
                    <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
                    <span className="ml-auto text-blue-400 font-medium">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image with Floating Animation */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <motion.img
                src={profileImg}
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="absolute -bottom-8 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-80 bg-black px-6 py-2 rounded-full backdrop-blur-md">
                <p className="text-sm font-medium text-blue-400">AI-Driven Web Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-10 h-10 text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;