import About from "./About";
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
      <About />
    </main>
  );
}

export default Page;
