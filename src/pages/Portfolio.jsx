import codingGame from "../images/Coding-Quiz-Game.png";
import dailyPlanner from "../images/work-planner.png";
import project1 from "../images/Taste-Buds-Unite.png";
import plantPal from "../images/plantPal4.png";
import intensity from "../images/Intensity3.png";

import '../styles/pageStyles/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Taste Buds Unite",
      image: project1,
      description: "Front-end application that assists users with meal ideas they can cook based on the ingredient or cuisine they have in mind",
      repo: "https://github.com/tishaanderson/TasteBudsUnite",
      deployed: "https://tishaanderson.github.io/TasteBudsUnite/",
      language: ["HTML, ", "CSS, ", "JavaScript, ", "Server-Side API, ", "Materialize"],
    },
    {
      title: "Plant Pal",
      image: plantPal,
      description: "Full-stack web application designed for Texas gardening enthusiasts",
      repo: "https://github.com/tishaanderson/PlantPal",
      deployed: "https://tisha-anderson-plant-pal-7344ed2b4c7b.herokuapp.com/",
      language: ["Node.js, ", "Express.js ", "Handlebars.js, ", "MySQL, ", "Sequelize ORM, ", "MVC, ", "Third-Party API, ", "Bcrypt, ", "DotENV"],
    },
    {
      title: "Coding Game",
      image: codingGame,
      description: "Timed coding quiz with multiple choice questions that features dynamically updated HTML and CSS powered by JavaScript with a responsive UI",
      repo: "https://github.com/tishaanderson/Web-APIs-Coding-Quiz",
      deployed: "https://tishaanderson.github.io/Web-APIs-Coding-Quiz/",
      language: ["HTML, ", "CSS, ", "JavaScript",],
    },
    {
      title: "Daily Planner",
      image: dailyPlanner,
      description: "Simple calendar application that features dynamically updated HTML and CSS powered by jQuery",
      repo: "https://github.com/tishaanderson/Daily-Planner",
      deployed: "https://tishaanderson.github.io/Daily-Planner/",
      language: ["HTML, ", "CSS, ", "JavaScript, ", "jQuery, ", "Day.js "],
    },
    {
      title: "Intensity",
      image: intensity,
      description: "MERN stack single-page application that focuses on client fitness goals powered by REACT in Vite with HMR",
      repo: "https://github.com/tishaanderson/Intensity",
      deployed: "https://intensity.onrender.com/",
      language: ["HTML, ", "CSS, ", "JavaScript, ", "REACT, ", "MERN, ", "GraphQL, ", "Node.js, ", "Express.js, ", "MongoDB, ", "Mongoose ODM, ", "JWT"],
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
                  id={`${project.title}-logo`}
                />
              </a>
              <div className="card-body card-info">
                {/* <h5 className="card-title">{project.title}</h5> */}
                <ul className="list-group list-group-flush coding-info">
                  <li className="list-group-item code-item">
                    <b>Coding Highlights: </b>
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
