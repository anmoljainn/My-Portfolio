import React from "react";
import "./portfolio.css";
import RogFree from "../../assets/RogFree.png";
import PortfolioImage from "../../assets/portfolio.png";
import Ecommerce from "../../assets/Ecommerce.png";


const data = [
  {
    id: 1,
    image: RogFree,
    title: "Rog Free Website",
    github: "https://github.com/anmoljainn/Rog-Free.git",
    description: "Rog Free Website",
    demo: "https://anmoljainn.github.io/Rog-Free/",
  },
  {
    id: 2,
    image: PortfolioImage,
    title: "Portfolio",
    github: "https://github.com/anmoljainn/My-Portfolio.git",
    description: "Responsive Portfolio",
    demo: "https://anmoljain-portfolio.netlify.app/",
  },
  {
    id: 3,
    image: Ecommerce,
    title: "Ecommerce",
    github: "https://github.com/anmoljainn/Ecommerce-Website.git",
    description: "Ecommerce Website",
    demo: "https://anmoljainn.github.io/Ecommerce-Website/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, description, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{description}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} classsName="btn" target="__blank">
                    Github
                  </a>
                  <a href={demo} classsName="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
