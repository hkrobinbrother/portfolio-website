import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMouseFill } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r flex items-center from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          <BsMouseFill className="mr-2 text-amber-300" /> Hk Robin
        </a>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl cursor-pointer focus:outline-none"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {links.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => setOpen(false)}
            className="text-4xl md:text-5xl font-bold hover:text-blue-400 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;