import { useLayoutEffect } from "react";
import "./Projects.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { details } from "../lib/projects";
import DetailCard from "./DetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSectionInView } from "../lib/useElementInViewport";
import SectionHeading from "./SectionHeading";

function Projects() {
  const { ref } = useSectionInView("Projects");
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos: GSAPStaggerVars[] = gsap.utils.toArray(
        ".desktopPhoto:not(:first-child)"
      );

      gsap.set(photos, { yPercent: 101 });

      const allPhotos: GSAPStaggerVars[] = gsap.utils.toArray(".desktopPhoto");

      // create
      let mm = gsap.matchMedia();

      // add a media query. When it matches, the associated function will run
      mm.add("(min-width: 600px)", () => {
        // this setup code only runs when viewport is at least 600px wide
        console.log("desktop");

        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          // markers: true,
        });

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        details.forEach((detail: any, index) => {
          let headline = detail.querySelector("h1");
          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0 })
            .set(allPhotos[index], { autoAlpha: 0 });
          ScrollTrigger.create({
            trigger: headline,
            start: "top 70%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            // markers: true,
          });
        });

        return () => {
          // optional
          // custom cleanup code here (runs when it STOPS matching)
          console.log("mobile");
        };
      });
    });
    return () => ctx.revert();
  }, []);

  const renderDesktopContentSections = () => {
    return details.map((detail) => {
      return (
        <React.Fragment key={detail.name}>
          {/* {index === Math.round(details.length / 2) && <div ref={ref}></div>} */}
          <div className="desktopContentSection" key={detail.name}>
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
        </React.Fragment>
      );
    });
  };

  const renderMobileContentSections = () => {
    return details.map((detail) => {
      return (
        <React.Fragment key={detail.name}>
          <div className="mobilePhoto"></div>
          <span className="mobileCard">
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
          </span>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <div ref={ref}></div>
      <SectionHeading>Projects</SectionHeading>
      <div className="projects-section" id="projects">
        <div className="gallery">
          <div className="left">
            <div className="desktopContent">
              {renderDesktopContentSections()}
            </div>
          </div>

          <div className="right">
            {/* <!-- mobile content --> */}
            <div className="mobileContent">{renderMobileContentSections()}</div>

            {/* <!-- desktop content --> */}

            <div className="desktopPhotos">
              {details.map((detail, index) => {
                return (
                  <DetailCard index={index} detail={detail} key={detail.name} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
