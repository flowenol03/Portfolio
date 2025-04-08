import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const skills = [
    {
        name: 'Prompt Engineering',
        icon: 'https://cdn-icons-png.flaticon.com/512/10004/10004765.png',
        description: 'Designing effective AI prompts for optimized outputs.',
        level: 85,
    },
    {
        name: 'Generative AI',
        icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png',
        description: 'Building solutions using generative AI models.',
        level: 80,
    },
    {
        name: 'Hugging Face',
        icon: 'https://cdn.simpleicons.org/huggingface/white',
        description: 'Utilizing state-of-the-art NLP/ML models.',
        level: 78,
    },
    {
        name: 'DALL·E',
        icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341025.png',
        description: 'Generating images from text prompts using AI.',
        level: 70,
    },
    {
        name: 'NLP',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1024px-Tensorflow_logo.svg.png',
        description: 'Understanding and processing human language.',
        level: 82,
    },
    {
        name: 'LLM',
        icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
        description: 'Working with powerful language models like GPT.',
        level: 80,
    },
    {
        name: 'LangChain',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/640px-ChatGPT_logo.svg.png',
        description: 'Framework for building GenAI-powered applications using LLMs, memory, and agents.',
        level: 77,
    },
    {
        name: 'C/C++',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png',
        description: 'High-performance programming languages.',
        level: 75,
    },
    {
        name: 'Java',
        icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/640px-Java_programming_language_logo.svg.png',
        description: 'Object-oriented language for cross-platform apps.',
        level: 78,
    },
    {
        name: 'Python',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png',
        description: 'Versatile and beginner-friendly programming language.',
        level: 88,
    },
    {
        name: 'HTML',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',
        description: 'Building the structure of web pages.',
        level: 95,
    },
    {
        name: 'CSS',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png',
        description: 'Styling beautiful and responsive designs.',
        level: 90,
    },
    {
        name: 'JavaScript',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png',
        description: 'Powering interactivity on the web.',
        level: 88,
    },
    {
        name: 'PHP',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png',
        description: 'Server-side scripting for dynamic websites.',
        level: 75,
    },
    {
        name: 'React',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
        description: 'JavaScript library for building modern UIs.',
        level: 85,
    },
    {
        name: 'TypeScript',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png',
        description: 'Typed superset of JavaScript for large-scale apps.',
        level: 80,
    },
];

const Skills = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const skillsPerPage = 8;
    const totalPages = Math.ceil(skills.length / skillsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleSkills = skills.slice(
        currentPage * skillsPerPage,
        (currentPage + 1) * skillsPerPage
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Skills</span>
            </h2>

            <div className="relative w-full max-w-7xl">
                <motion.button
                    onClick={prevPage}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/60 rounded-full hover:bg-gray-700 transition-all backdrop-blur-md"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-10">
                    <AnimatePresence mode="wait">
                        {visibleSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${currentPage}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex"
                            >
                                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
                                    <div className="bg-gray-900/70 border-2 border-purple-500 rounded-2xl p-6 text-center shadow-xl hover:shadow-purple-500/50 transition-all duration-300 h-full flex flex-col">
                                        <div className="flex-grow">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-16 h-16 mx-auto mb-4 object-contain"
                                            />
                                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                                            <p className="text-sm text-gray-300 mb-4 min-h-[60px]">{skill.description}</p>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-3">
                                            <div
                                                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-sm text-right text-gray-400 mt-1">{skill.level}%</p>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.button
                    onClick={nextPage}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/60 rounded-full hover:bg-gray-700 transition-all backdrop-blur-md"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
            </div>

            <div className="flex mt-8 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentPage === index ? 'bg-purple-500 w-6' : 'bg-gray-600'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
