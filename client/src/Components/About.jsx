import React from 'react';

const About = () => {
    return (
        <div className="text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
                <p className="text-xl font-bold text-gray-300 leading-relaxed shadow-2xl shadow-blue-500/30 p-8 rounded-2xl bg-gray-900 bg-opacity-70 backdrop-blur-md">
                    I'm a passionate web developer with expertise in building responsive and user-friendly websites using modern technologies like React, Tailwind CSS, and Node.js. My journey in web development started with a curiosity to create digital experiences that are both functional and visually appealing.
                </p>
            </div>
        </div>
    );
};

export default About;