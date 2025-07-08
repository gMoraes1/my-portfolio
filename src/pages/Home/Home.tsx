import NavBar from "../../components/NavBar/NavBar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import FooterDois from "../footer/footer";
import Hero from "./sections/Hero/Hero";
import ProjectBack  from "../Projects/ProjectBack";


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <ProjectBack/>
      <Projects/>
      <FooterDois />
    </>
  );
};

export default Home;
