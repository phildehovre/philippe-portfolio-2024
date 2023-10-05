import { useSectionInView } from "../lib/useElementInViewport";
import "./Experience.scss";
import { experienceDataType } from "../lib/types";
import { experienceData } from "../lib/text";

function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <div ref={ref} id="experience" className="experience-section">
      <h1>Experience</h1>
      <ul className="experience-ctn">
        {experienceData.map((experience: experienceDataType) => {
          return (
            <li key={experience.position} className="experience-element-card">
              <h3 className="experience-element-headline">
                {experience.position}
              </h3>
              <h4 className="experience-element-company">
                {experience.company} | <span>{experience.date}</span>
              </h4>
              <p className="experience-element-description">
                {experience.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
