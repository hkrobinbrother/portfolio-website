import React from "react";
import profile from "../assets/aboutimag.jpeg";

const About = () => {
  return (
    <section className="text-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Image (1/3) */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={profile}
              alt="profile"
              className="w-full max-w-sm rounded-2xl shadow-2xl shadow-blue-500/30 object-cover"
            />
          </div>

          {/* Text (2/3) */}
          <div className="md:col-span-2 bg-gray-900 bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-2xl shadow-blue-500/30">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I am a passionate MERN Stack Developer specializing in building
              modern, scalable, and high-performance web applications. I work
              with MongoDB, Express.js, React, and Node.js to create full-stack
              solutions that deliver seamless user experiences.
              <br /><br />
              I enjoy turning complex problems into simple, beautiful, and
              intuitive designs. With strong skills in JavaScript, REST APIs,
              authentication systems, and responsive UI development using
              Tailwind CSS, I focus on writing clean, maintainable, and
              efficient code.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;