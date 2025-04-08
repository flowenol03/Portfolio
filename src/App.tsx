import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer.tsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <section id="home" className="py-16">
          <Home />
        </section>

        {/* ✅ Fixed class names */}
        <section id="about" className="py-6 bg-gray-100 -mt-10">
          <About />
        </section>

        {/* ⭐ Skills Section */}
        <section id="skills" className="py-6 bg-gray-50">
          <Skills />
        </section>

        <section id="projects" className="py-6 bg-gray-50">
          <Projects />
        </section>

        <section id="hobbies" className="py-6 bg-gray-100">
          <Hobbies />
        </section>

        <section id="contact" className="py-6 bg-gray-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
