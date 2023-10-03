import { useSectionInView } from "../lib/useElementInViewport";
import "./Experience.scss";

function Experience() {
  const { ref } = useSectionInView("Experience");
  return <div ref={ref}>Experience</div>;
}

export default Experience;
