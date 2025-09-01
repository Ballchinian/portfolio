import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}