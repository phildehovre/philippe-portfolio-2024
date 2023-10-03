import { useSectionInView } from "../lib/useElementInViewport";
import "./About.scss";

function About() {
  const { ref } = useSectionInView("About");
  return <div ref={ref}>About</div>;
}

export default About;
