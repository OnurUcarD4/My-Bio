import React from "react";
import Title from "./PortfolioComponents/Title";
import PortfolioCard from "./PortfolioComponents/PortfolioCard";

const PortfolioData = [
  {
    Key: 1,
    Title: "The services provide for design",
    Category: "DEVELOPMENT",
    Like: "600",
    Image:
      "https://inbio-react.netlify.app/static/57ab87af87223d70a70d396075f46c8c/d0f18/portfolio-01.webp",
  },
  {
    Key: 2,
    Title: "Mobile app landing design & app maintain",
    Category: "APPLICATION",
    Like: "750",
    Image:
      "https://inbio-react.netlify.app/static/a6d273d704eb2200c0d6fc5c67bc85df/d0f18/portfolio-02.webp",
  },
  {
    Key: 3,
    Title: "Logo design creativity & Application",
    Category: "PHOTOSHOP",
    Like: "630",
    Image:
      "https://inbio-react.netlify.app/static/4001311bd28adeda122878ec66af39de/d0f18/portfolio-03.webp",
  },
  {
    Key: 4,
    Title: "Mobile app landing design & Services",
    Category: "FIGMA",
    Like: "360",
    Image:
      "https://inbio-react.netlify.app/static/59da1960acefc2729623a8df0e8aec5e/d0f18/portfolio-04.webp",
  },
  {
    Key: 5,
    Title: "Design for technology & services",
    Category: "WEB DESIGN",
    Like: "280",
    Image:
      "https://inbio-react.netlify.app/static/8363a8c01ef33b9cdc639459fb5cc440/d0f18/portfolio-05.webp",
  },
  {
    Key: 6,
    Title: "App for technology & services",
    Category: "WEB DESIGN",
    Like: "500",
    Image:
      "https://inbio-react.netlify.app/static/b4e650e6d577f42def9df4d8e773332b/d0f18/portfolio-06.webp",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="scroll-m-40">
      <Title />
      <div className="lg:grid lg:grid-cols-3 gap-12">
        {PortfolioData.map((e) => {
          return (
            <React.Fragment key={e.Key}>
              <PortfolioCard data={e} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
