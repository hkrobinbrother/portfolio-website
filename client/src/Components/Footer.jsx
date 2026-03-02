import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="min-h-screen shadow shadow-lg text-white flex flex-col justify-center items-center text-center px-6">

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
            href="mailto:yourmail@example.com"
            className="hover:text-blue-400 transition-colors"
          >
            hkrobin48@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-4 text-lg md:text-xl">
          <FaPhoneAlt className="text-purple-400" />
          <a
            href="tel:+8801234567890"
            className="hover:text-purple-400 transition-colors"
          >
            +880 1302012386
          </a>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;