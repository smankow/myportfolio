// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";

const Experience = ({ theme }) => {
    const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

    const experiences = [
        {
            company: "CVS",
            title: "Senior Software Engineer",
            dates: "May 2022 - October 2026",
            projects: [
                {
                    name: "Pharmacy Portal",
                    bullets: [
                        "Migrated and rebuilt legacy pharmacy portal pages from .NET to React and Angular repositories while maintaining all functionality.",
                        "Utilized prompt engineering with LLMs to deliver unit tests with at least 80% code coverage, increase code efficiency, and detect vulnerabilities.",
                        "Built and utilized scalable, reusable web component libraries based on UI/UX design specifications.",
                        "Reduced backend load by validating form fields before requests were made.",
                        "Performed regression, accessibility, and end-to-end testing throughout feature development to preserve functionality.",
                        "Used a BFF layer to manage data responses across roles and authorizations and implemented pagination to reduce response payloads.",
                        "Contributed to CI/CD workflows with GitHub Actions for build, test, and deployment.",
                        "Reviewed pull requests and provided feedback on code quality, maintainability, accessibility, testing, and project standards.",
                    ],
                },
                {
                    name: "Account Management",
                    bullets: [
                        "Built and maintained responsive account settings pages compatible across major browsers using React, JavaScript, HTML, CSS, and Stencil.",
                        "Created a reusable web-component library for micro-frontend architecture across multiple pages.",
                        "Resolved accessibility defects and implemented A11Y-compliant components to improve keyboard and screen reader usability.",
                        "Collaborated with the accessibility team to eliminate defects and maintain compliance across account features.",
                        "Performed functional, end-to-end, and accessibility testing to identify defects and reduce regressions.",
                        "Wrote comprehensive Cypress end-to-end flows to improve coverage and reduce workflow regressions.",
                        "Used Jira and Rally for sprint planning, defect tracking, and task management in Agile development cycles.",
                        "Supported CI/CD deployments via Harness and GitHub Actions and screened interviews for React engineering candidates.",
                    ],
                },
            ],
        },
        {
            company: "Balance Innovations, LLC",
            title: "React Developer",
            dates: "February 2021 - April 2022",
            projects: [
                {
                    name: "Veribalance Web Application",
                    bullets: [
                        "Designed and built a reliable, responsive web application compatible across browsers using React, JavaScript, HTML, CSS, Redux, Webpack, and Babel.",
                        "Developed reusable React components using unidirectional data flow through props and state management.",
                        "Created reusable UI components with Material UI based on mockups from the UX/UI team.",
                        "Used Redux and Reselect to manage shared state and prevent unnecessary updates.",
                        "Installed and managed dependencies using npm and maintained version control with Git.",
                        "Ran unit tests with Jest and React Testing Library to validate application behavior.",
                    ],
                },
            ],
        },
        {
            company: "Wakefern Food Corporation",
            title: "Front End Developer",
            dates: "December 2018 - January 2021",
            projects: [
                {
                    name: "Rapid Web Application",
                    bullets: [
                        "Built reusable UI components for forms, inputs, buttons, and layout patterns across frontend projects.",
                        "Developed clickable UI prototypes while enhancing the existing site with new features using HTML5 and CSS3.",
                        "Created test cases and wrote unit tests using Jest and React Testing Library.",
                        "Used Git for version control and conflict resolution across project branches.",
                        "Utilized React Router to provide a smooth single-page application experience with low load times.",
                        "Managed frontend tooling with npm, Babel, Webpack, and ESLint to maintain code quality and browser compatibility.",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="experience" className={newTheme}>
            <div className="container text-center">
                <h2>Experience</h2>
                <hr />
                <div className="experience-container">
                    {experiences.map((job) => (
                        <div className="experience-container-card" key={`${job.company}-${job.title}`}>
                            <h3>{job.company}</h3>
                            <h5>{job.title}</h5>
                            <h5>{job.dates}</h5>
                            {job.projects.map((project) => (
                                <div key={`${job.company}-${project.name}`}>
                                    <h6>{project.name}</h6>
                                    <ul>
                                        {project.bullets.map((bullet) => (
                                            <li key={`${job.company}-${project.name}-${bullet}`}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Link className="scroll" to="contact" smooth={true} duration={750}>
                <FaChevronCircleDown id="scroll-down" />
            </Link>
        </section>
    );
};

export default Experience;