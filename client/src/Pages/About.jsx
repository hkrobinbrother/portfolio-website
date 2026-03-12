import React from "react";
import profile from "../assets/aboutimag.jpeg";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
    <section className="text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative group">
              <img
                src={profile}
                alt="profile"
                className="w-full max-w-sm rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl opacity-40 group-hover:opacity-70 transition"></div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-8">

            {/* Card 1 */}
            <div className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-800 hover:border-blue-500 transition duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                About Me
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                Hi! I’m <span className="text-white font-semibold">Hasan Kabir Robin</span>, 
                a passionate software developer focused on frontend technologies 
                like React.js, Next.js, and the MERN stack. I started my coding 
                journey in late 2023 and since then I've been dedicated to 
                learning and building modern web applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-800 hover:border-purple-500 transition duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">
                Academic Background
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                I completed my SSC in 2021 from Ashir Par High School with a 
                GPA of 4.72. Currently, I am pursuing a Diploma in Computer 
                Science from Chottogram Polytechnic Institute and expect to 
                graduate in 2026.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-800 hover:border-pink-500 transition duration-300 hover:shadow-xl hover:shadow-pink-500/20">
              <h3 className="text-2xl font-semibold mb-3 text-pink-400">
                My Coding Journey
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                I began coding at the end of 2023, diving into frontend 
                development. Since then I've built several projects using 
                React, Next.js, and Tailwind CSS. I love learning new 
                technologies and constantly improving my skills to build 
                impactful software solutions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;