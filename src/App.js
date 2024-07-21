import React from 'react';
import './App.css'; // Import your global styles
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/hobbies'; // Ensure this matches the file name
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
