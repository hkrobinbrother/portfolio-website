import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      description:
        "A modern e-commerce website built with React and Tailwind CSS.",
      image: img1,
      technology: ["React", "Tailwind CSS", "React Router DOM"],
      gitUrl: "https://github.com/hkrobinbrother/Gadget-heaven-8",
      liveLink: "https://gadget-heven-77.netlify.app/",
    },
    {
      id: 2,
      title: "Online Movie - React & Tailwind",
      description:
        "A movie review website built with React and Tailwind CSS.",
      image: img2,
      technology: ["React", "Tailwind CSS", "React Router DOM"],
      gitUrl: "https://github.com/hkrobinbrother/online-movie",
      liveLink: "https://online-movie-all.netlify.app/",
    },
    {
      id: 3,
      title: "Free Food - Full Stack",
      description:
        "A full-stack food delivery app built with React, Node.js & MongoDB.",
      image: img3,
      technology: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
      gitUrl: "https://github.com/hkrobinbrother/Free-food-client",
      liveLink: "https://free-food-client-vm9f.vercel.app/",
    },
    {
      id: 4,
      title: "Nest Mart - Grocery Store UI",
      description:
        "A grocery store UI built with React and Tailwind CSS.",
      image: img4,
      technology: ["React", "Tailwind CSS", "React Router DOM"],
      gitUrl: "https://github.com/hkrobinbrother/nest-mart",
      liveLink: "https://nest-mart-kappa.vercel.app/",
    },
    {
      id: 5,
      title: "Cafe Ali - Full Stack",
      description:
        "A full-stack cafe website with admin dashboard.",
      image: img5,
      technology: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
      gitUrl: "https://github.com/hkrobinbrother/cafe-ali-client",
      liveLink: "https://cafe-ali-94d82.web.app",
    },
    {
      id: 6,
      title: "Football Club Website + Admin",
      description:
        "A football club website with full admin dashboard.",
      image: img6,
      technology: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
      gitUrl:
        "https://github.com/hkrobinbrother/Ashir-Par-FoodBall-Club",
      liveLink: "https://ashir-par-football-club.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen text-white px-6 py-16"
    >
      <h2 className="text-4xl md:text-7xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Latest Projects
      </h2>

      <div className="max-w-6xl mx-auto">

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col h-full">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-800 border border-purple-500/30 text-purple-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaLink /> Live
                    </a>

                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Projects;