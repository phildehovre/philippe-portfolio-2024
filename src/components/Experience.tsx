import { useSectionInView } from "../lib/useElementInViewport";
import "./Experience.scss";
import { experienceDataType } from "../lib/types";
import { experienceData } from "../lib/text";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React, { useEffect, useRef } from "react";

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(document.querySelector(".experience-element-headline")!);

    return () => observer.disconnect();
  }, []);

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
