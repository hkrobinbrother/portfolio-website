import profile from "../../assets/profileimage.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 blur-3xl"></div>

      {/* Profile Image */}
      <div className="absolute right-0 bottom-0 hidden md:block md:w-1/2 lg:w-2/5">
        <img
          src={profile}
          alt="Hk Robin"
          className="w-full h-[90vh] object-contain opacity-80 rounded-2xl shadow-2xl shadow-blue-500/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <div className="max-w-2xl">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hk Robin
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6">
            MERN Stack & Frontend React Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            I build modern, fast, and responsive web applications using 
            <span className="font-semibold text-blue-400"> React, Node.js, Express & MongoDB</span>.  
            Passionate about creating full-stack projects that are scalable and user-friendly.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/50">
              <a href="#projects">View Projects</a>
            </button>

            <button className="px-8 py-3 border border-gray-600 hover:border-blue-500 transition duration-300 rounded-xl font-semibold">
              <a href="#contact">Contact Me</a>
            </button>
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;