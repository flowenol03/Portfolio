import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: 'SwarSwarup Resort',
      description: 'A web application built with TypeScript...',
      github: 'https://github.com',
      demo: 'https://swarswarupresort.netlify.app/',
      image: project1,
      tech: ['React', 'Node.js', 'TypeScript', 'WebSocket'],
    },
    {
      name: 'Apurva Tours & Travels',
      description: 'A Tours & Travels website built with TypeScript...',
      github: 'https://github.com',
      demo: 'https://apurvatours.netlify.app/',
      image: project4,
      tech: ['React', 'Node.js', 'TypeScript', 'Firebase'],
    },
    {
      name: 'Anushyam Mangal Karyalay',
      description: 'A Mangal Karyalay webstie buitl with Typescript...',
      github: 'https://github.com',
      demo: 'https://apurvatours.netlify.app/',
      image: project5,
      tech: ['React', 'Node.js', 'TypeScript', 'Firebase'],
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects...',
      github: 'https://github.com',
      demo: 'https://flowenolportfolio.netlify.app/',
      image: project2,
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    },
    {
      name: 'E-commerce Platform',
      description: 'An online store built with React...',
      github: 'https://github.com',
      demo: 'https://ecommerce.netlify.app/',
      image: project3,
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Projects</span>
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/60 rounded-full hover:bg-gray-700 transition-all backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        <div className="w-full max-w-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/80 border-2 border-purple-500 rounded-xl shadow-2xl p-6 text-center flex flex-col items-center transform transition-all"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <motion.img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].name}
                  className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/50"
                />
              </Tilt>
              <h3 className="text-2xl font-bold mt-4">{projects[activeIndex].name}</h3>
              <p className="text-gray-300 text-sm mt-2">{projects[activeIndex].description}</p>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <a href={projects[activeIndex].github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href={projects[activeIndex].demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/60 rounded-full hover:bg-gray-700 transition-all backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;