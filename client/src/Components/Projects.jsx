import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import img1 from "../assets/gadget-heven.png";
import img2 from "../assets/online-movie.png";
import img3 from "../assets/free-food.png";
import img4 from "../assets/nest-mart.png";
import img5 from "../assets/cafe-ali.png";
import img6 from "../assets/asfc.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Gadget Heaven - React & Tailwind",
      image: img1,
      gitUrl: "https://github.com/hkrobinbrother/Gadget-heaven-8",
      liveLink: "https://gadget-heven-77.netlify.app/",
    },
    {
      id: 2,
      title: "Online Movie - React & Tailwind",
      image: img2,
      gitUrl: "https://github.com/hkrobinbrother/online-movie",
      liveLink: "https://online-movie-all.netlify.app/",
    },
    {
      id: 3,
      title: "Free Food - Full Stack",
      image: img3,
      gitUrl: "https://github.com/hkrobinbrother/Free-food-client",
      liveLink: "https://free-food-client-vm9f.vercel.app/",
    },
    {
      id: 4,
      title: "Nest Mart - Restaurant UI",
      image: img4,
      gitUrl: "https://github.com/hkrobinbrother/nest-mart",
      liveLink: "https://nest-mart-kappa.vercel.app/",
    },
    {
      id: 5,
      title: "Cafe Ali - Full Stack",
      image: img5,
      gitUrl: "https://github.com/hkrobinbrother/cafe-ali-client",
      liveLink: "https://cafe-ali-94d82.web.app",
    },
    {
      id: 6,
      title: "Football Club Website + Admin",
      image: img6,
      gitUrl: "https://github.com/hkrobinbrother/Ashir-Par-FoodBall-Club",
      liveLink: "https://ashir-par-football-club.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen text-white px-6 py-16 flex flex-col items-center overflow-hidden"
    >
      <h2 className="relative text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Latest Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <div className="mt-auto flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                >
                  <FaLink /> Live Demo
                </a>
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;