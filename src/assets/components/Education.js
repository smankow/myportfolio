// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";

const Education = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <section id="education" className={newTheme}>
      <div className="container text-center">
        <h2>Education</h2>
        <hr />
        <div className="education-container">
          <h3>University of Hartford</h3>
          <h5>West Hartford, CT</h5>
          <h5>Bachelor of Science: Computer Science</h5>
          <h5>May 2019</h5>
          <ul>
            <li>Minored in Math</li>
            <li>3.4 GPA</li>
          </ul>
        </div>
      </div>
      <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
    </section>
  );
};

export default Education;