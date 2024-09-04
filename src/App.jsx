// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from "./assets/img/profile.jpg";
import PortfolioItem from "./components/portfolio-item.jsx";
import { useState } from "react";
import { getAllPPortfolios } from "./utils/local-data.js";

function App() {
  const [portfolios] = useState(getAllPPortfolios());

  return (
    <>
      {/*Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">M Fakhry</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileImg}
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*Page Content*/}
      <div className="container-fluid p-0">
        {/*About*/}
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
              I am an IT Enthusiast with extensive knowledge in computer
              science. I&apos;m looking for a job as a programmer, especially
              Back-End Developer.
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
        <hr className="m-0" />
        {/*Portfolio*/}
        <section className="resume-section" id="portfolio">
          <div className="resume-section-content">
            <h2 className="mb-5">Portfolio</h2>
            {portfolios.map((portfolio) => (
              <PortfolioItem
                key={portfolio.id}
                link={portfolio.link}
                title={portfolio.title}
                body={portfolio.body}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
