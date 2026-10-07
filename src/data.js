// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";
import { SiAngular, SiGithubactions, SiTypescript } from "react-icons/si";

// Projects Images (add your images to the /assets/images directory and import below)
import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";
import notepad from "./assets/images/notepad.svg";

/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUsername = "smankow";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 2,
    skill: <SiTypescript className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 3,
    skill: <FaJs className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 5,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3 / SCSS",
  },
  {
    id: 6,
    skill: <SiAngular className="display-4" />,
    name: "Angular",
  },
  {
    id: 7,
    skill: <FaNode className="display-4" />,
    name: "Node.js",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <SiGithubactions className="display-4" />,
    name: "GitHub Actions",
  },
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "Background-Generator",
  "github-react-portfolio-template",
  "notepad",
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: colors,
  },
  {
    image: react,
  },
  {
    image: notepad,
  },
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "mankowskisam@gmail.com",
  phone: "(860)-356-6000",
  // mailChimp: "https://www.mailchimp.com/",
};
