function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Muhammad
          <span className="text-primary">Fakhry</span>
        </h1>
        <div className="subheading mb-5">
          <a href="mailto:fakhry.linux@gmail.com">fakhry.linux@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am an IT Enthusiast with extensive knowledge in computer science.
          I&apos;m looking for a job as a programmer, especially DevOps
          Engineer.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://linkedin.com/in/fakhrylinux"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="https://github.com/fakhrylinux">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
