import { useLayoutEffect } from "react";
import "./Projects.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { details } from "../lib/cases";
import DetailCard from "./DetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

function Projects() {
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
          markers: true,
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
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: true,
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
      );
    });
  };

  return (
    // <div>Projects</div>
    <div className="projects-section">
      <div className="gallery">
        <div className="left">
          <div className="desktopContent">{renderDesktopContentSections()}</div>
        </div>

        <div className="right">
          {/* <!-- mobile content --> */}
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div className="mobilePhoto green"></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>

            <div className="mobilePhoto pink"></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div className="mobilePhoto blue"></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          {/* <!-- desktop content --> */}

          <div className="desktopPhotos">
            {details.map((detail, index) => {
              return <DetailCard index={index} detail={detail} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
