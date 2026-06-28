import NavBar from "../../components/NavBar/NavBar";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Footer from "../footer/footer";
import Hero from "./sections/Hero/Hero";
import ProjectBack from "../Projects/ProjectBack";

const Home = () => (
  <>
    <NavBar />
    <Hero />
    <About />
    <Skill />
    <ProjectBack />
    <Footer />
  </>
);

export default Home;
