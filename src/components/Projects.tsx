import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: 'SwarSwarup',
      description: 'A web application built with TypeScript...',
      github: 'https://github.com',
      demo: 'https://swarswarupresort.netlify.app/',
      image: '../images/project1.jpg',
      tech: ['React', 'Node.js', 'TypeScript', 'WebSocket'],
    },
    {
      name: 'AyurMediPro',
      description: 'A Desktop application built with php...',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '../images/project2.jpg',
      tech: ['Next.js', 'php', 'TypeScript', 'PostgreSQL'],
    },
    {
      name: 'Project Three',
      description: 'AI-powered data visualization dashboard...',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '../images/project3.jpg',
      tech: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Projects</span>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/50 rounded-full backdrop-blur-md hover:bg-gray-700 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Project Display */}
          <div className="overflow-hidden w-full max-w-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.name} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl group">
                    {/* Project Image with Hover Effect */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay with Hover Effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <p className="text-gray-300 text-center mt-2">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4 mt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/50 rounded-full backdrop-blur-md hover:bg-gray-700 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
