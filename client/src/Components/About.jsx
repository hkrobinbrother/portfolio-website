import React from 'react';

const About = () => {
    return (
        <div className="text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
                <p className="text-xl text-center items-center font-bold text-gray-300 leading-relaxed shadow-2xl shadow-blue-500/30 p-8 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-md">
                    I am a passionate MERN Stack Developer specializing in building modern, scalable, and high-performance web applications. I work with MongoDB, Express.js, React, and Node.js to create full-stack solutions that deliver seamless user experiences.I enjoy turning complex problems into simple, beautiful, and intuitive designs. With strong skills in JavaScript, REST APIs, authentication systems, and responsive UI development using Tailwind CSS, I focus on writing clean, maintainable, and efficient code.
                </p>
            </div>
        </div>
    );
};

export default About;