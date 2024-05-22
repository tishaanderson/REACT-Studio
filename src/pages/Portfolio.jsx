import horiseon from '../images/horiseon-icon.png'
import codingGame from '../images/Coding-Quiz-Game.png'
import dailyPlanner from '../images/work-planner.png'
import project1 from '../images/Taste-Buds-Unite.png'
import project2 from '../images/PlantPal.png'
import techTalk from '../images/TechTalk.png'
// import NameTitle from "../components/Title";

// import '../styles/Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
<>

{/* <NameTitle /> */}

    
    <div className='portfolio'>
      <div className='half-page'>
        <div className="card">
          <a href="https://tishaanderson.github.io/Horiseon-site/" target="_blank" >
            <img src={horiseon} className="card-img" id="horiseon-icon" alt="horiseon logo personalized with dotted border around it" />
          </a>
          <div className="card-body">
            <h5 className="card-title">SMU Bootcamp Challenge</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Week: </b>1</li>
              <li className="list-group-item"><b>Coding Language: </b>HTML, CSS </li>
              <li className="list-group-item"><b>Github: </b><a href="https://github.com/tishaanderson/Horiseon-site">Horiseon Site</a> </li>
              <li className="list-group-item"><b>Description: </b>My first assignment within the SMU Coding Bootcamp was an on-the-job ticket challenge, tasking us with refactoring the Horiseon website.</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <a href="https://tishaanderson.github.io/Web-APIs-Coding-Quiz/" target="_blank" >
            <img src={codingGame} className="card-img" id="game-icon" alt="coding quiz game header as icon" />
          </a>
          <div className="card-body">
          <h5 className="card-title">SMU Bootcamp Challenge</h5>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Week 4: </b>Web-APIs</li>
              <li className="list-group-item"><b>Coding Language: </b>HTML, CSS, JavaScript </li>
              <li className="list-group-item"><b>Github: </b><a href="https://github.com/tishaanderson/Web-APIs-Coding-Quiz">Coding Quiz Game</a></li>
              <li className="list-group-item"><b>Description: </b>One month into the SMU coding program, we were tasked with building a timed coding quiz with multiple-choice questions.</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <a href="https://tishaanderson.github.io/Daily-Planner/" target="_blank" >
            <img src={dailyPlanner} className="card-img" id="planner-icon" alt="9AM button from daily planner as icon" />
          </a>
          <div className="card-body">
          <h5 className="card-title">SMU Bootcamp Challenge</h5>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Week 5: </b>Third-Party APIs</li>
              <li className="list-group-item"><b>Coding Language: </b>HTML, CSS, JavaScript, jQuery </li>
              <li className="list-group-item"><b>Github: </b><a href="https://github.com/tishaanderson/Daily-Planner">Daily Planner</a></li>
              <li className="list-group-item"><b>Description: </b>Building a simple calendar application powered by jQuery was my 5th assignment within the SMU program.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className='half-page'>
        <div className="card">
          <a href="https://tishaanderson.github.io/TasteBudsUnite/" target="_blank" >
            <img src={project1} className="card-img" id="project1-icon" alt="Taste Buds Unite page header as icon" />
          </a>
          <div className="card-body">
          <h5 className="card-title">SMU Bootcamp Project #1</h5>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Week:</b> 8</li>
              <li className="list-group-item"><b>Coding Language:</b> HTML, CSS, JavaScript, Web, Third-Party, and Server-Side APIs </li>
              <li className="list-group-item"><b>Github: </b> 
                <a href="https://github.com/tishaanderson/TasteBudsUnite">Taste Buds Unite!</a> </li>
              <li className="list-group-item"><b>Description: </b>2 months into the SMU program, we had our first group project which required us to create a real-world front-end application. My group built a website that would take the hard work out of meal plans, allowing a user to enter the main ingredient or the type of food they want to make and the app would show them a list of meal ideas they can cook with that ingredient or cuisine in mind.</li>
                
            </ul>
          </div>
        </div>
        
        <div className="card">
          <a href="https://welcome-to-my-tech-talk-65e41c57bb43.herokuapp.com/" target="_blank" >
            <img src={techTalk} className="card-img" id="techTalk-icon" alt="Partial header from the Welcome to My Tech Talk website as icon" />
          </a>
          <div className="card-body">
          <h5 className="card-title">SMU Bootcamp Challenge</h5>
          <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Week 14:</b> MVC</li>
              <li className="list-group-item"><b>Coding Language:</b> SQL, ORM, Express, MVC </li>
              <li className="list-group-item"><b>Github: </b> 
                <a href="https://github.com/tishaanderson/WelcomeToMyTechTalk">Welcome to My Tech Talk</a>
              </li>
              <li className="list-group-item"><b>Description: </b>This project goal was to build a CMS-style blog site following the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <a href="https://tisha-anderson-plant-pal-7344ed2b4c7b.herokuapp.com/" target="_blank" >
            <img src={project2} className="card-img" id="project2-icon" alt="Plant Pal homepage as icon" />
          </a>
          <div className="card-body">
          <h5 className="card-title">SMU Bootcamp Project #2</h5>
          <ul className="list-group list-group-flush card-list">
              <li className="list-group-item"><b>Week:</b> 16</li>
              <li className="list-group-item"><b>Coding Language:</b> NodeJS, OOP, Express, SQL, ORM, MVC </li>
              <li className="list-group-item"><b>Github: </b> 
                <a href="https://github.com/tishaanderson/PlantPal">Plant Pal</a>
              </li>
              <li className="list-group-item"><b>Description:</b> Our second group project came 4 months into the program, where we were able to build our first interactive full-stack application. My group built a web application tailored for Texas gardening enthusiasts, offering a user-friendly platform to streamline garden planning, organization, and plant care. </li>
            </ul>
          </div>
        </div>

        
      </div>
    </div>

</>
  );
}