import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
// import Experience from "./Experience";
import Skills from "./Skills";
import Test from "./Test";

function Page() {
  return (
    <main>
      {/* <Test /> */}
      <Hero />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <About />
      <Contact />
    </main>
  );
}

export default Page;
