// import horiseon from "../images/horiseon-icon.png";
import codingGame from "../images/Coding-Quiz-Game.png";
import dailyPlanner from "../images/work-planner.png";
import project1 from "../images/Taste-Buds-Unite.png";
// import techTalk from "../images/TechTalk.png";
import plantPal from "../images/plantPal3.png";

import '../styles/pageStyles/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Taste Buds Unite",
      image: project1,
      description: "",
      repo: "https://github.com/tishaanderson/TasteBudsUnite",
      deployed: "https://tishaanderson.github.io/TasteBudsUnite/",
      language: [],
    },
    {
      title: "Plant Pal",
      image: plantPal,
      description: "",
      repo: "https://github.com/tishaanderson/PlantPal",
      deployed: "https://tisha-anderson-plant-pal-7344ed2b4c7b.herokuapp.com/",
      language: [],
    },
    {
      title: "Coding Game",
      image: codingGame,
      description: "",
      repo: "https://github.com/tishaanderson/Web-APIs-Coding-Quiz",
      deployed: "https://tishaanderson.github.io/Web-APIs-Coding-Quiz/",
      language: [],
    },
    {
      title: "Daily Planner",
      image: dailyPlanner,
      description: "",
      repo: "https://github.com/tishaanderson/Daily-Planner",
      deployed: "https://tishaanderson.github.io/Daily-Planner/",
      language: [],
    },
  ];
  return (
    <>
      <div className="portfolio">
        <div className="half-page">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <a href={project.deployed} target="_blank">
                <img
                  src={project.image}
                  className="card-img"
                  alt={`${project.title} logo`}
                />
              </a>
              <div className="card-body ">
                {/* <h5 className="card-title">{project.title}</h5> */}
                <ul className="list-group list-group-flush coding-info">
                  <li className="list-group-item code-item">
                    <b>Coding Language: </b>
                    {project.language}
                  </li>
                  <li className="list-group-item code-item">
                    <b>Github: </b>
                    <a href={project.repo}>{project.title}</a>{" "}
                  </li>
                  <li className="list-group-item code-item">
                    <b>Description: </b>
                    {project.description}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
