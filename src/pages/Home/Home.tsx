import NavBar from "../../components/NavBar/NavBar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <Projects />
    </>
  );
};

export default Home;
