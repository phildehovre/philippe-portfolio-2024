import { useLayoutEffect, useState } from "react";
import "./Header.scss";
import { useActiveSectionContext } from "../context/activeElementContext";
import { links } from "../lib/types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isShowing, setIsShowing] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "main",
        start: "50px 5%",
        toggleClass: { targets: "nav", className: "nav-active" },
        // markers: true,
      });
    });

    return () => ctx.revert();
  });

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <li
          key={link.name}
          onClick={() => {
            setActiveSection(link.name);
            setTimeOfLastClick(Date.now());
          }}
          className={activeSection === link.name ? "active" : ""}
        >
          <a href={link.hash}>{link.name}</a>
        </li>
      );
    });
  };
  return (
    <header>
      <nav className="navbar">
        <div
          className={`hamburger ${isShowing ? "showing" : ""}`}
          onClick={() => setIsShowing(!isShowing)}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
        <ul className={`links ${isShowing ? "showing" : ""}`}>
          {renderLinks()}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
