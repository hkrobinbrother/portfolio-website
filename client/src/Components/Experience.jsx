import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Work Experience
        </h2>

        {/* Experience Card */}
        <div className="relative border-l-4 border-blue-500 pl-8">

          <div className="absolute -left-4 top-2 bg-blue-500 p-3 rounded-full shadow-lg">
            <FaBriefcase className="text-white text-lg" />
          </div>

          <div className=" p-8 rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition duration-300">

            {/* Company */}
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              BD Calling Academy
            </h3>

            {/* Position + Date */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <p className="text-lg font-semibold text-gray-200">
                Frontend Developer
              </p>
              <p className="text-sm text-gray-400">
                Sep 2025 - Dec 2025
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              Completed an industrial attachment at BD Calling Academy, where I
              developed modern and responsive user interfaces using React , Next Js and
              Redux. Collaborated with designers to create seamless user
              experiences, optimized components for high performance across
              devices, and actively participated in code reviews to maintain
              clean and scalable code standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;