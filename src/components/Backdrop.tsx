import { useLayoutEffect } from "react";
import "./Backdrop.scss";
import gsap from "gsap";

function Backdrop() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 600px)", () => {
        gsap.set(".first", { scalex: 1.2 });
        gsap.set(".second", { scaleY: 1.2, scale: 0.54, y: "50%" });
        gsap.set(".third", { scale: 0.2, y: "-50%" });
        gsap
          .to(
            ".first",

            {
              scale: 1,
              duration: 15,
              y: "25%",
              scaleX: 0.8,
              ease: "power1.inOut",
            }
          )
          .repeat(-1)
          .yoyo(true);
        gsap
          .to(
            ".second",

            {
              scale: 1,
              duration: 10,
              y: "25%",
              scaleY: 0.8,
              rotate: 20,
              ease: "power1.inOut",
            }
          )
          .repeat(-1)
          .yoyo(true);
        gsap
          .to(
            ".third",

            {
              scale: 1,
              duration: 17,
              y: "25%",
              skew: 4,
              ease: "power1.inOut",
            }
          )
          .repeat(-1)
          .yoyo(true);
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="container">
      <div className="blob first"></div>
      <div className="blob second"></div>
      <div className="blob third"></div>
    </div>
  );
}

export default Backdrop;
