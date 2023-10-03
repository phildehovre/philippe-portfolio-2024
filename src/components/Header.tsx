import { useLayoutEffect } from "react";
import "./Header.scss";
import { useActiveSectionContext } from "../context/activeElementContext";
import { links } from "../lib/types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

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
          {link.name}
        </li>
      );
    });
  };

  return (
    <header>
      <nav className="navbar">
        <ul>{renderLinks()}</ul>
      </nav>
    </header>
  );
}

export default Header;
