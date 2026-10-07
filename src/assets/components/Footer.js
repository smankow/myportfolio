const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
      <p className="lead my-3 text-white mb-0">
        &copy; {new Date().getFullYear()} Sam Mankowski
      </p>
    </footer>
  );
};

export default Footer;
