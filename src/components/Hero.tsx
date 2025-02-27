import { useSectionInView } from "../lib/useElementInViewport";
import "./Hero.scss";
import { welcomeText } from "../lib/text";
import gsap from "gsap";
import { useLayoutEffect } from "react";

function Hero() {
  const { ref } = useSectionInView("Home");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const mm = gsap.matchMedia();

      tl.set(".my-name-is", { opacity: 0 })
        .set(".description", { opacity: 0 })
        .set("#swipe-instructions", { opacity: 0 });
      mm.add("(min-width: 600px)", () => {
        tl.fromTo(
          ".greeting",
          { y: "0%", opacity: 0 },
          {
            opacity: 1,
            y: "-46%",
            duration: 2.5,
            ease: "elastic.out(1, 0.3)",
            delay: 0.3,
          }
        );
      });

      mm.add("(max-width: 600px)", () => {
        tl.fromTo(
          ".greeting",
          { y: "0%" },
          {
            opacity: 1,
            y: "-93.2%",
            duration: 2.5,
            ease: "elastic.out(1, 0.3)",
          }
        );
      });

      tl.to(".greeting-ctn", { y: -80, duration: 1 }, "-=0.2")
        .to(".my-name-is", { opacity: 1, y: -80, duration: 1 }, "-=0.5")
        .to(".description", { opacity: 1, y: -80, duration: 1.2 }, "-=0.7")
        .to(
          "#swipe-instructions",
          { opacity: 1, y: 25, duration: 1, ease: "bounce" },
          "-=0.7"
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
    <div className="hero-section" ref={ref} id="home">
      <div className="greeting-ctn desktop">
        <h1 className="greeting-wrapper mobile">Hello!</h1>
        <div className="greeting-wrapper desktop">
          <div className="greeting">
            {renderWelcome()}
            <h1 className="title">Hello!</h1>
          </div>

          <div className="greeting">{renderWelcome()}</div>
        </div>
      </div>
      <h1 className="my-name-is">I am Philippe</h1>
      <div className="description">
        I'm a <b>Full-Stack web Developer</b> with <b>4 years</b> of experience.
        I focus on <b>Node.js and React</b>. I am also passionate about{" "}
        <b>UI/UX</b> and elegant, pixel-perfect designs.
        <div className="hero-cta-ctn">
          <a
            className="hero-cta cv"
            target="_blank"
            href="https://drive.google.com/file/d/1NfN9R0HJ6gS2m4DMC4DOCAU2261c1Hrq/view?usp=sharing"
          >
            Download CV
          </a>
          <a className="hero-cta conact" href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <div id="swipe-instructions">
        Scroll down for some case studies!
        <div id="swipe-btn"></div>
      </div>
    </div>
  );
}

export default Hero;
