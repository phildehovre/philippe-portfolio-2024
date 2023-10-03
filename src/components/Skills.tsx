import { useSectionInView } from "../lib/useElementInViewport";
import "./Skills.scss";

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <div className="skills-section" ref={ref}>
      Skills
    </div>
  );
}

export default Skills;
