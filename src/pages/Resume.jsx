import resume from "/TishaAndersonResume.pdf";
import "../styles/pageStyles/Resume.css";

export default function Resume() {
  const education = [
    {
      degree: "Full-Stack Web Development Boot Camp Certificate",
      school: "Southern Methodist University",
    },
    {
      degree: "Bachelor of Science (B.S.)",
      school: "University of North Texas",
    },
  ];

  const experience = [
    {
      years: "2020-2023",
      title: "Quality Assurace Lead",
      company: "Custom Ink",
      responsibilities: [
        "Responsible for collaborating closely with product teams to align quality assurance processes with development goals and timelines.",
        "Led and guided the quality assurance team, fostering collaboration and teamwork to ensure adherence to company standards and objectives.",
        "Effectively delegated tasks within the QA team for the successful implementation of new features and functionalities.",
        "Developed and implemented SOPs to enhance efficiency and consistency in QA activities, optimizing performance and productivity.",
        "Identified and addressed areas for process improvement, driving continuous enhancement across departments.",
        "Provided training and mentorship to QA team members, facilitating skill development and knowledge sharing.",
        "Prioritized customer satisfaction by maintaining a qualityfocused approach throughout product development.",
        "Proactively identified and mitigated risks to product quality, safety, and compliance, ensuring adherence to industry standards and best practices while optimizing performance.",
      ],
      key_accomplishments: [
        "Spearheaded a quality improvement initiative within an 8-member team, elevating quality rating from levels 1-3 to an exceptional level of 6-8 (with 8 representing the highest standard).",
        "Orchestrated a transformation within the shipping department, increasing output by nearly 50% compared to previous levels.",
        "Fostered a culture of teamwork and collaboration, resulting in a streamlined operational process with mistakes decreasing to less than 10% of previous levels.",
        "Achieved outstanding results in both quality assurance and shipping departments, setting new standards for operational excellence.",
      ],
    },
    {
      years: "2016-2020",
      title: "Bartender",
      company: "Buffalo Wild Wings",
      responsibilities: [
        "Provided exceptional customer service by courteously engaging with patrons and accurately taking orders.",
        "Expertly mixed and served drinks according to standard recipes and customer preferences.",
        "Processed payments accurately using cash registers or POS systems, maintaining cash draw integrity.",
        "Actively promoted specials and upsold premium drinks to enhance sales and customer satisfaction.",
      ],
    },
    {
      years: "2016",
      title: "Front Desk Associate",
      company: "FYZICAL Therapy and Balance Centers",
      responsibilities: [
        "Effectively communicated with clients via phone, email, and in-person interactions.",
        "Demonstrated strong multitasking abilities to ensure smooth front desk operations.",
        "Exhibited excellent organizational skills in managing daily front desk responsibilities.",
      ],
    },
  ];

  const skills = {
    fields: [
      "Full-Stack Web Development",
      "Quality Assurance",
      "Applied Behavior Analysis",
    ],
    programming: [
      "HTML",
      "CSS",
      "JavaScript",
      "OOP",
      "SQL",
      "NoSQL",
      "MySQL",
      "Bootstrap",
      "MongoDB",
      "jQuery",
      "Express.js",
      "GraphQL",
      "REACT",
      "Node.js",
      "MVC",
      "Handlebars.js",
    ],
    // coding: ["REACT", "Node.js", "MVC", "Handlebars.js"],
    personalStrengths: [
      "Problem Solving",
      "Strategic Decision Making",
      "Reinforcement Strategies",
      "Organization",
      "Time Management",
      "SOP Development",
      "Streamlining Processes",
      "Cost-Savings Strategies",
      "Developing Quality Standards",
      "Strong Analytical Abilities",
      "Task Prioritization",
    ],
  };

  return (
    <div className="resume">
      <div className="resume-download">
        <a href={resume} download>
          <button className="download-button">
            Click to Download My Resume
          </button>
        </a>
      </div>

      <div className="resume-card" id="education-section">
        <h3 className="resume-section">Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <h6>{edu.degree}</h6>
            <p>{edu.school}</p>
          </div>
        ))}
      </div>

      <div className="resume-card" id="experience-section">
        <h3 className="resume-section">Experience</h3>
        {experience.map((job, index) => (
          <div key={index}>
            <p className="job-years">{job.years}</p>
            <h6 className="job-title">
              {job.title} <i className="company-name">{job.company}</i>
            </h6>
            <ul className="job-responsibilities">
              {job.responsibilities.map((task, idx) => (
                <li key={idx} className="job-list">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="resume-card">
        <h3 className="resume-section">Skills</h3>

        <div className="all-skills">
          <div className="skills" id="fields-div">
            <h6 className="skill-title">Fields:</h6>
            <ul className="skills-list" id="fields-list">
              {skills.fields.map((field, index) => (
                <ul key={index} className="skill-bullet" id="fields-bullet">
                  {field}
                </ul>
              ))}
            </ul>
          </div>

          <div className="skills" id="programming-div">
            <h6 className="skill-title">Programming:</h6>
            <ul className="skills-list" id="programming-list">
              {skills.programming.map((language, index) => (
                <ul key={index} className="skill-bullet">
                  {language}
                </ul>
              ))}
            </ul>
          </div>

          <div className="skills" id="personal-div">
            <h6 className="skill-title">
              Personal Strengths:
            </h6>
            <ul className="skills-list" id="personal-list">
              {skills.personalStrengths.map((strength, index) => (
                <ul key={index} className="skill-bullet">
                  {strength}
                </ul>
              ))}
            </ul>
          </div>

          {/* <ul className="skills">
            <h5 className="skill-type">Coding:</h5>
            {skills.coding.map((code, index) => (
              <li key={index} className="skill-list">
                {code}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
