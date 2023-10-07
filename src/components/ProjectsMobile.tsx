import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { details } from "../lib/projects";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ProjectsMobile() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {});

    const details: GSAPStaggerVars[] = gsap.utils.toArray(
      ".mobileContentSection"
    );

    details.forEach((detail: any) => {
      gsap.set(detail, { opacity: 0, x: -50 });
      gsap.to(detail, {
        scrollTrigger: {
          trigger: detail,
          start: "top 80%",
          end: "bottom 60%",
          //   markers: {
          //     startColor: "dodgerBlue",
          //     endColor: "pink",
          //   },
        },
        opacity: 1,
        duration: 0.5,
        x: 0,
        stagger: 0.5,
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="mobileContent">
      {details.map((detail) => {
        return (
          <div className="mobileContentSection" key={detail.name}>
            <h1>{detail.name}</h1>
            <p>{detail.description}</p>
            <span className="buttons-ctn">
              <a
                className="detail-link"
                href={detail.url}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEarth} size="lg" />
              </a>
              <a
                className="detail-link"
                href={detail.github}
                target="_blank"
                rel="noreferrer"
              >
                {`< / >`}
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsMobile;
