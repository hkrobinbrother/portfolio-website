import React from "react";

import blog1 from "../assets/blog.jpg";
import blog2 from "../assets/blog.jpg";
import blog3 from "../assets/blog.jpg";
import Footer from "../Components/Footer";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How I Built My Portfolio with React & Tailwind",
      description:
        "Learn how I created a modern developer portfolio using React and Tailwind CSS.",
      date: "March 2026",
      image: blog1,
      link: "#",
    },
    {
      id: 2,
      title: "React Context API Beginner Guide",
      description:
        "A simple explanation of React Context API and how to manage global state.",
      date: "February 2026",
      image: blog2,
      link: "#",
    },
    {
      id: 3,
      title: "Deploy React App on Vercel",
      description:
        "Step-by-step guide to deploy your React project on Vercel easily.",
      date: "January 2026",
      image: blog3,
      link: "#",
    },
  ];

  return (
    <>
    <section id="blogs" className="min-h-screen text-white px-6 py-20">
      
      {/* Title */}
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Blogs
      </h2>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300 hover:scale-105"
          >
            
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>

              <h3 className="text-xl font-semibold mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5">
                {blog.description}
              </p>

              <a
                href={blog.link}
                className="inline-block px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                Read More
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
    <Footer />
    </>
  );
}