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
        <section id="home" className="py-16">
          <Home />
        </section>
        <section id="about" className="py-6 bg-white-100 mt-[-40px]">
          <About />
        </section>
        <section id="projects" className="py-6 bg-white-50">
          <Projects />
        </section>
        <section id="hobbies" className="py-6 bg-white-100">
          <Hobbies />
        </section>
        <section id="contact" className="py-6 bg-white-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
