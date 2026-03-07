import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMouseFill } from "react-icons/bs";
import { Link } from "react-router";



const Navbar = () => {
  const [open, setOpen] = useState(false);

 

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar container */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative shadow backdrop-blur-md">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r flex items-center from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          <BsMouseFill className="mr-2 text-amber-300" /> Hk Robin
        </Link>

        {/* Menu Button (always visible) */}
        {!open && (
          <button
            onClick={toggleMenu}
            className="text-white text-2xl z-50 cursor-pointer focus:outline-none"
          >
            <FiMenu />
          </button>
        )}
      </div>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ${
          open
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-4xl text-white z-50 focus:outline-none cursor-pointer"
        >
          <FiX />
        </button>

        {/* Menu Links */}
      <div className="flex flex-col space-y-2 text-5xl" >
          <Link
            to="/"
            onClick={()=>setOpen(false)}
            className="text-6xl font-bold hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/about"
            onClick={()=>setOpen(false)}
            className="text-6xl font-bold hover:text-blue-400 transition duration-300"
          >
            About
          </Link>
        
          <Link 
            to="/projects"
            onClick={()=>setOpen(false)}
            className="text-6xl font-bold hover:text-blue-400 transition duration-300"
          >
            Projects
          </Link>
          <Link 
            to="/blogs"
            onClick={()=>setOpen(false)}
            className="text-6xl font-bold hover:text-blue-400 transition duration-300"
          >
            Blogs
          </Link>
       
          <Link 
            to="/contact"
            onClick={()=>setOpen(false)}
            className="text-6xl font-bold hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;