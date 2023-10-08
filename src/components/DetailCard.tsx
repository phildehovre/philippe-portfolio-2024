import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { skillsObject } from "../lib/text";

type DetailCardProps = {
  color: string;
  stack: string[];
  name: string;
  img: string;
};

function DetailCard(props: { index: number; detail: DetailCardProps }) {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [showDetail, setShowDetail] = React.useState<number | null>(null);
  const stackItemRef = React.useRef(null);
  const { index } = props;
  const { img, stack } = props.detail;

  useEffect(() => {
    showDetail === index ? setIsHovered(true) : setIsHovered(false);
  }, [showDetail]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isHovered) {
        gsap
          .timeline()
          .set(`.stack-item-${index}`, { opacity: 0, y: "101%" })
          .to(".detail-overlay", {
            opacity: 0.8,
            y: "0%",
            duration: 0.2,
            ease: "power2.inOut",
          })
          .to(`.stack-item-${index}`, {
            opacity: 1,
            stagger: 0.1,
            y: "0%",
            delay: 0.2,
          });
      }
    });

    return () => ctx.revert();
  }, [isHovered]);

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className={`desktopPhoto ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setShowDetail(index)}
      onMouseLeave={() => setShowDetail(null)}
      style={styles}
    >
      <div className="detail">
        <div className="detail-overlay">
          {isHovered &&
            stack.map((item) => {
              const skillObject = skillsObject.find(
                (skill) => skill.label === item
              );
              return (
                <p
                  key={item}
                  className={`skill stack-item-${index}`}
                  ref={stackItemRef}
                  style={{ border: `1px solid ${skillObject?.color}` }}
                >
                  {skillObject?.name}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
