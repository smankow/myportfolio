import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const SocialLinks = ({ githubUrl, portfolioUrl, linkedinUrl }) => {
  const links = [
    { url: githubUrl, label: "GitHub", icon: <FaGithub /> },
    { url: portfolioUrl, label: "Portfolio", icon: <FaLink /> },
    { url: linkedinUrl, label: "LinkedIn", icon: <FaLinkedin /> },
  ].filter(({ url }) => url);

  return (
    <div className="social-links">
      {links.map(({ url, label, icon }) => (
        <a
          className="mx-3"
          href={url}
          key={label}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
