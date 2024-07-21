import React from 'react';
import './Contact.css'; // Ensure you have styles for this component

function Contact() {
  return (
    <section id="contact" className="Contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to chat about anime or technology, feel free to reach out.
      </p>
      <ul>
        <li>
          <a href="mailto:prathameshkhandekar3@gmail.com">
            <i className="fas fa-envelope"></i> Email Me
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/prathamesh-khandekar-414b81256?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLgqTFA%2F2TPWIp7InoI%2F7vg%3D%3D" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/flowenol03" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/13qxb7EA2AogbJfC9sEY2A3oJCpfrxzTT/view?usp=sharing" download="PrathameshKhandekar.pdf">
            <i className="fas fa-download"></i> Download CV
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
