import About from "../About";
import Experience from "../Experience";
import Footer from "../Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Hero/Navbar";
import Projects from "../Projects";
import Skills from "../Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Skills />
      <Projects />
      <About />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
