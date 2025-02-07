import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from "./components/Footer.tsx";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <section id="home" className="pt-20">
          <Home />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="projects" className="py-20 bg-white">
          <Projects />
        </section>
        <section id="hobbies" className="py-20">
          <Hobbies />
        </section>
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
