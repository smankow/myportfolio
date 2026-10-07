// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "../containers/NavBar";

// Image
import logo from "../images/logo.svg";

const About = ({ theme, setTheme, name }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <img
          className="logo spin img-fluid"
          src={logo}
          alt="React Logo"
          height="45%"
          width="45%"
        />
        <h1>{name}</h1>
        <hr />
        {/* <p>{bio}</p> */}
        <p>
          Senior software engineer with 7 years of experience building responsive,
          accessible web applications using React, TypeScript, and modern web
          development technologies. Experienced in creating reusable web
          components, BFF layers, and CI/CD workflows with Harness and GitHub
          Actions. Strong background in accessibility testing, end-to-end
          automation with Cypress, and AI-assisted development using GitHub
          Copilot and Claude.
        </p>
        <p className="mt-3 mb-0">Windsor, CT</p>
        {/* <SocialLinks {...socialData} /> */}
        <Link className="scroll" to="education" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
