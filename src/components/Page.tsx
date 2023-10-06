import About from "./About";
import Experience from "./Experience";
import ExperienceRefactor from "./Experience-Refactor";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Page() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <ExperienceRefactor />
      <About />
    </main>
  );
}

export default Page;
