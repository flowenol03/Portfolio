import React from 'react';
import { Target, BookOpen, Star, Heart } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: 'Who I Am',
      icon: BookOpen,
      content: 'A dedicated developer with a passion for creating innovative solutions...',
    },
    {
      title: 'My Journey',
      icon: Target,
      content: 'Started my journey in tech with a curiosity for how things work...',
    },
    {
      title: 'Skills & Expertise',
      icon: Star,
      content: 'Specialized in modern web technologies including React, TypeScript, and Node.js...',
    },
    {
      title: 'What Drives Me',
      icon: Heart,
      content: 'The endless possibilities of technology and its power to make a positive impact...',
    },
  ];

  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="gradient-border p-[2px] rounded-lg animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-900 p-6 rounded-lg h-full">
                <div className="flex items-center mb-4">
                  <section.icon className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="glass-effect rounded-lg p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Looking Ahead</h3>
            <p className="text-gray-300 leading-relaxed">
              My goal is to continue growing as a developer while contributing to meaningful projects...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;