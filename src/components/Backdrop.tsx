import { useLayoutEffect } from "react";
import "./Backdrop.scss";
import gsap from "gsap";

function Backdrop() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".backdrop", { scale: 0.6 });
      gsap
        .to(
          ".backdrop",

          {
            scale: 1,
            duration: 7,
            y: "25%",
          }
        )
        .repeat(-1)
        .yoyo(true);
    });
    return () => ctx.revert();
  }, []);

  return <div className="backdrop"></div>;
}

export default Backdrop;
