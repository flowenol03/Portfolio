import React, { useState, useEffect, useRef } from 'react';
import './About.css'; // Add your styles here

function About() {
  const [activeIndex, setActiveIndex] = useState(null); // No box initially active
  const contentRef = useRef(null);

  const boxes = [
    {
      title: 'Who I am',
      content: `I'm Prathamesh Khandekar, a passionate and driven web developer who loves transforming creative ideas into functional and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I thrive on the challenge of bringing unique designs and user experiences to life.`
    },
    {
      title: 'My Journey',
      content: `From a young age, I’ve been fascinated by technology and how it can be used to solve problems and make our lives easier. My journey into web development began with a curiosity about how websites are built and a desire to create my own. Over time, this curiosity has evolved into a full-fledged career, and I've gained experience in various projects that have honed my skills and deepened my understanding of front-end development.`
    },
    {
      title: 'Skills and Expertise',
      content: `HTML/CSS: Crafting responsive and visually appealing layouts with a focus on user experience. JavaScript: Adding interactivity and dynamic content to websites. React: Building complex user interfaces with a modern, component-based approach.`
    },
    {
      title: 'What Drives Me',
      content: `What excites me the most about web development is the endless possibility for creativity and problem-solving. I’m constantly learning new technologies and techniques to stay ahead in this fast-evolving field. My goal is to deliver high-quality solutions that not only meet but exceed client expectations.`
    },
    {
      title: 'Looking Ahead',
      content: `I’m always on the lookout for new challenges and opportunities to grow. Whether it’s diving into new frameworks, exploring innovative design trends, or collaborating on exciting projects, I’m eager to continue learning and pushing the boundaries of what’s possible. Feel free to connect with me if you’d like to discuss potential collaborations or just chat about the latest in web development. Let’s create something amazing together!`
    }
  ];

  useEffect(() => {
    if (contentRef.current && activeIndex !== null) {
      const activeBox = contentRef.current.children[activeIndex];
      const offsetLeft = activeBox.offsetLeft;
      const scrollLeft = offsetLeft - (contentRef.current.clientWidth - activeBox.clientWidth) / 2;
      contentRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : boxes.length - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < boxes.length - 1 ? prevIndex + 1 : 0));
  };

  const handleBoxClick = (index) => {
    setActiveIndex(index); // Set active index to the clicked box
  };

  return (
    <section id="about" className="About">
      <h2>About Me</h2>
      <div className="About-content-wrapper">
      <button 
  className="arrow arrow-left" 
  onClick={() => handlePrevClick('left')}
  aria-label="Previous"
>
  {'<'}
</button>

        <div className="About-content" ref={contentRef}>
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`About-box ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleBoxClick(index)}
            >
              <h3>{box.title}</h3>
              <p>{box.content}</p>
            </div>
          ))}
        </div>
      <button 
  className="arrow arrow-right" 
  onClick={handleNextClick} 
  aria-label="Next"
>
  {'>'}
</button>
      </div>
    </section>
  );
}

export default About;
