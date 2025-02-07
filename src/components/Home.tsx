import React from 'react';
import { Code, Brush, Brain, Coffee, ChevronDown } from 'lucide-react';

const profileImg = new URL('../images/IMG_1346.jpg', import.meta.url).href; // ✅ Fix applied

const Home = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, progress: 90 },
    { name: 'UI/UX Design', icon: Brush, progress: 85 },
    { name: 'Problem Solving', icon: Brain, progress: 95 },
    { name: 'Quick Learning', icon: Coffee, progress: 88 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="text-lg text-blue-400 font-medium mb-2">Welcome to my portfolio</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Prathamesh</span>
              </h1>
              <p className="text-xl text-gray-300">
                A passionate developer crafting beautiful and functional web experiences
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="ml-auto text-blue-400">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ width: `${skill.progress}%`, transition: 'width 1s ease-in-out' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 animate-float">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Profile Image */}
              <img src={profileImg} alt="Profile" className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl" />

              {/* Text with Gradient */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="glass-effect px-6 py-2 rounded-full">
                  <p className="text-sm font-medium gradient-text">Front End Developer</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
