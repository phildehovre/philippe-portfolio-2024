import { useLayoutEffect } from "react";
import { skillsObject } from "../lib/text";
import { useSectionInView } from "../lib/useElementInViewport";
import "./Skills.scss";
import gsap from "gsap";

function Skills() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const { ref } = useSectionInView("Skills");

  return (
    <div className="skills-section" ref={ref} id="skills">
      <h1>My Skills</h1>
      <ul className="skills-ctn">
        {skillsObject.map((skill) => {
          return (
            <li
              title={skill.category}
              className="skill"
              style={{ border: `2px solid ${skill.color}` }}
              key={skill.name}
            >
              <div title={skill.category} className="skill-name">
                {skill.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
