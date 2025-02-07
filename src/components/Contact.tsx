import React from 'react';
import { Mail, Github, Linkedin, FileText, Instagram } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:prathameshkhandekar3@gmail.com',
      color: 'hover:text-red-400 hover:scale-110',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/flowenol03',
      color: 'hover:text-purple-400 hover:scale-110',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/prathamesh-khandekar-414b81256?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzsXYAxq9RdW9EYzZnz%2Bm5A%3D%3D',
      color: 'hover:text-blue-400 hover:scale-110',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/its_hsemahtarp_0.3?igsh=MW1uMmlodHd0eXBkYw%3D%3D&utm_source=qr', // Replace with your Instagram link
      color: 'hover:text-pink-400 hover:scale-110',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in <span className="gradient-text">Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-75"></div>
            <div className="relative bg-gray-800 rounded-lg p-8">
              <div className="text-center mb-12">
                <p className="text-xl text-gray-300">
                  I'm always open to new opportunities and interesting projects.
                  Feel free to reach out!
                </p>
              </div>

              <div className="flex justify-center space-x-8 mb-12">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 ${link.color}`}
                  >
                    <link.icon className="w-10 h-10" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://drive.google.com/file/d/1j4BDbN4YhK92Qdh_bINWIMuUH8ofwlLS/view?usp=sharing"
                  download
                  className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold relative group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-600 ease-out group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-600 ease-out group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg mix-blend-screen"></span>
                  <span className="relative flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
