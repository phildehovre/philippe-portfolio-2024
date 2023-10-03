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
          y: "-89.5%",
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
        <div className="description">Web Developer</div>
      </div>
    </div>
  );
}

export default Hero;
