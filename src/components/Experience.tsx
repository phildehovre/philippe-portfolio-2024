import { useSectionInView } from "../lib/useElementInViewport";
import "./Experience.scss";
import { experienceDataType } from "../lib/types";
import { experienceData } from "../lib/text";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React from "react";

function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <div ref={ref} id="experience" className="experience-section">
      <h1>Experience</h1>
      <div className="experience-ctn">
        <VerticalTimeline lineColor={"red"}>
          {experienceData.map((experience: experienceDataType) => {
            return (
              <React.Fragment key={experience.position}>
                <VerticalTimelineElement>
                  <h3>{experience.position}</h3>
                  <h4>
                    {experience.company} | {experience.date}
                  </h4>
                  <p>{experience.description}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
