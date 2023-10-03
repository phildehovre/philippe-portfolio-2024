import { useSectionInView } from "../lib/useElementInViewport";
import "./Hero.scss";

function Hero() {
  const { ref } = useSectionInView("Home");

  return (
    <div className="hero-section" ref={ref}>
      Hero
    </div>
  );
}

export default Hero;
