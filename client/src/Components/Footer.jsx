import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Interested to Work Together?
      </h2>

      <p className="text-gray-400 max-w-xl mb-10 text-lg">
        I'm always open to discussing new projects, creative ideas or
        opportunities to be part of your vision. Feel free to contact me.
      </p>

      {/* Contact Info */}
      <div className="space-y-6">

        {/* Email */}
        <div className="flex items-center justify-center gap-4 text-lg md:text-xl">
          <FaEnvelope className="text-blue-400" />
          <a
            href="mailto:hkrobin48@gmail.com"
            className="hover:text-blue-400 transition duration-300"
          >
            hkrobin48@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-4 text-lg md:text-xl">
          <FaPhoneAlt className="text-purple-400" />
          <a
            href="tel:+8801302012386"
            className="hover:text-purple-400 transition duration-300"
          >
            +880 1302012386
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8 text-3xl mt-8">

          <a
            href="https://www.facebook.com/mdhk.robin.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-125 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/hkrobinbrother"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-125 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hk-robin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-125 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/hk_robin_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-125 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Hk Robin. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;