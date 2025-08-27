import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioItem from "./components/portfolio-item.js";
import { useState } from "react";
import { getAllPPortfolios } from "./utils/local-data.js";
import Navigation from "./components/navigation.js";
import About from "./components/about.js";

function App() {
  const [portfolios] = useState(getAllPPortfolios());

  return (
    <>
      <Navigation />
      {/*Page Content*/}
      <div className="container-fluid p-0">
        <About />
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
