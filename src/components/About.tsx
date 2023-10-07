import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./About.scss";
import { useSectionInView } from "../lib/useElementInViewport";
import { aboutMe } from "../lib/text";
import SectionHeading from "./SectionHeading";

function About() {
  const { ref } = useSectionInView("About");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tlLeft = gsap.timeline();
      tlLeft.set("#about-content", { x: window.innerWidth * 0.6, opacity: 0 });
      tlLeft.to("#about-content", { x: 0, opacity: 1, duration: 1.5 });

      const tlRight = gsap.timeline();
      tlRight.set("#about-title", { x: -window.innerWidth * 0.6, opacity: 0 });
      tlRight.to("#about-title", { x: 0, opacity: 1, duration: 1.5 });

      const tlCenter = gsap.timeline();
      tlCenter.set("#design-element", { scaleY: 0 });
      tlCenter.to("#design-element", { scaleY: 1, duration: 1 });

      const start = "center center";
      const end = "center center";

      const mm = gsap.matchMedia();

      mm.add("(min-width: 600px)", () => {
        ScrollTrigger.create({
          trigger: ".about-ctn",
          start: start,
          end: end,
          animation: tlLeft,
          pin: "#about-content",
          scrub: 0.5,
          // markers: true,
        });

        ScrollTrigger.create({
          trigger: ".about-ctn",
          start: start,
          end: end,
          animation: tlRight,
          pin: "#about-title",
          scrub: 0.5,
          // markers: true,
        });

        ScrollTrigger.create({
          trigger: ".about-ctn",
          start: start,
          end: end,
          animation: tlCenter,
          pin: "#design-element",
          scrub: 0.5,
          // markers: true,
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={ref} className="about-section" id="about">
      <div className="about-ctn">
        <SectionHeading>About Me</SectionHeading>
        <div id="design-element"></div>
        <p id="about-content">{aboutMe.content}</p>
      </div>
    </div>
  );
}

export default About;
