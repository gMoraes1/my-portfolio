import NavBar from "../../components/NavBar/NavBar";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skill />
    </>
  );
};

export default Home;
