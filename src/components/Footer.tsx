import "./Footer.scss";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-ctn">
          <ul className="footer-col">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
          <ul className="footer-col">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <p>Copyright Philippe De Hovre {date.getFullYear()} </p>
      </div>
    </footer>
  );
}

export default Footer;
