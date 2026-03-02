import React from "react";

const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JAVASCRIPT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TAILWIND CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "REACT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "REACT ROUTER", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
  { name: "GITHUB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "FIREBASE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "NODE JS", img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
  { name: "EXPRESS JS", img: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
  { name: "MONGODB", img: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" },
  { name: "JWT", img: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000" },
  { name: "NEXT JS", img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" },
  { name: "REDUX TOOLKIT", img: "https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen  text-white px-6 py-16 flex flex-col items-center overflow-hidden"
    >
      {/* Background Gradient Blur */}
      
      <h2 className="relative text-4xl md:text-5xl font-bold mb-12 text-center z-10 text-white-400to-purple-500 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-blue-500/50"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg md:text-xl font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;