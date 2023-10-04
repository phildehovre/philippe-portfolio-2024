import { useSectionInView } from "../lib/useElementInViewport";
import "./Hero.scss";
import { welcomeText } from "../lib/text";
import gsap from "gsap";
import { useLayoutEffect } from "react";

function Hero() {
  const { ref } = useSectionInView("Home");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".greeting",
        { y: "0%" },
        {
          opacity: 1,
          y: "-91.75%",
          duration: 3,
          ease: "power4.out",
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const renderWelcome = () => {
    return welcomeText.map((message: string, index) => {
      return (
        <h1 className="title" key={message + index}>
          {message}
        </h1>
      );
    });
  };

  return (
    <div className="hero-section" ref={ref}>
      <div className="greeting-ctn">
        <div className="greeting-wrapper">
          <div className="greeting">{renderWelcome()}</div>
        </div>
      </div>
      <h1 className="my-name-is">I am Philippe</h1>
      <div className="description">
        I'm a <b>Front-end Developer</b> with <b>four years</b> of experience. I
        focus on <b>React</b> (Next.js). I am also passionate about <b>UI/UX</b>{" "}
        and elegant designs.
      </div>
    </div>
  );
}

export default Hero;
