// import '../styles/Resume.css';


export default function Resume() {
  return (
    <div className='resume'>

      <div className='resume-card' id='education-section'>
        <h3 className='resume-section'>Education</h3>
        <h6>Bachelor of Science (B.S.) </h6>
        <p>University of North Texas</p>
        <h6>Full-Stack Coding Bootcamp (Certification) </h6>
        <p>Southern Methodist University</p>
      </div>

      <div className='resume-card' id='experience-section'>
        <h3 className='resume-section'>Experience</h3>

        <p className='job-years'>2020-2023</p>
        <h6 className='job-title'>Quality Assurance Lead <i className='company-name'>Custom Ink</i></h6>
        <ul className='job-responsibilities'>
          <ul className='job-list'>Provide leadership and guidance to the quality assurance team, ensuring
            alignment with organizational goals and objectives.</ul>
          <ul className='job-list'>Assign tasks and delegate responsibilities effectively to ensure the
            team’s success.</ul>
          <ul className='job-list'>Develop and implement standard operating procedures (SOPs) to
            ensure consistent and efficient processes.</ul>
          <ul className='job-list'>Identify areas for process improvement and collaborate with other
            departments to properly implement solutions.</ul>
          <ul className='job-list'>Train and mentor quality assurance team members on quality standards,
            processes, and protocols.
          </ul>
          <ul className='job-list'>Maintain a customer-centric approach by prioritizing quality and
            ensuring customer satisfaction.</ul>
          <ul className='job-list'>Identify potential risks to quality and develop strategies to mitigate them.</ul>
          <ul className='job-list' id='last-job-list'>Proactively address issues that may impact product quality, safety or
            compliance.
          </ul>
        </ul>

        <p className='job-years'>2016-2020</p>
        <h6 className='job-title'>Bartender <i className='company-name'>Buffalo Wild Wings</i></h6>
        <ul className='job-responsibilities'>
          <ul className='job-list'>Provide exceptional customer service by taking orders accurately and
            engaging with patrons courteously.</ul>
          <ul className='job-list'>Mix and serve a variety of drinks according to standard recipes and
            customer preferences.</ul>
          <ul className='job-list'>Process payments accurately using cash registers or POS systems and
            maintain cash drawer integrity.
          </ul>
          <ul className='job-list' id='last-job-list'>Promote specials and upsell premium drinks to enhance sales and
            customer experience.
          </ul>
        </ul>

        <p className='job-years'>Summer 2016</p>
        <h6 className='job-title'>Front Desk Associate <i className='company-name'>FYZICAL Therapy and Balance Centers</i></h6>
        <ul className='job-responsibilities' id='summer-job'>
          <ul className='job-list'>Communicate effectively via phone, email, and in-person with clients.</ul>
          <ul className='job-list'>Excel in multitasking clerical tasks</ul>
          <ul className='job-list' id='last-job-list'>Demonstrate excellent organizational skills
          </ul>
        </ul>
      </div>

      <div className='resume-card' id='skills-section'>
        <h3 className='resume-section'>Skills</h3>
        <div className='skills-container'>

          <ul className='skills'>
            <h5 className='skill-type'>Fields:</h5>

            <li className='skill-list'>Full-Stack Development</li>
            <li className='skill-list'>Quality Assurance</li>
            <li className='skill-list'>Applied Behavior Analysis</li>
          </ul>



          <ul className='skills'>
            <h5 className='skill-type'>Programming Languages:</h5>

            <li className='skill-list'>HTML</li>
            <li className='skill-list'>CSS</li>
            <li className='skill-list'>JavaScript</li>
            <li className='skill-list'>SQL</li>
            <li className='skill-list'>NoSQL</li>

          </ul>



          <ul className='skills'>
            <h5 className='skill-type'>Coding:</h5>

            <li className='skill-list'>REACT</li>
            <li className='skill-list'>Node</li>
          </ul>
        </div>

        <div>
          <h5 className='skill-type' id='personal-skills'>Personal Strengths:</h5>
        </div>

        <div className='strengths'>
          <ul className='skills'>
            

            <li className='skill-list'>Problem Solving</li>
            <li className='skill-list'>Strategic Decision Making</li>
            <li className='skill-list'>Reinforcement Strategies</li>
            <li className='skill-list'>Organization and Time Management</li>
          </ul>
          <ul className='skills' id=''>
            <li className='skill-list'>Knowledgeable on creating SOPs, effective streamline processes and cost-savings strategies</li>
            <li className='skill-list'>Strong Analytical Abilities</li>
            <li className='skill-list'>Deleloping Quality Standards</li>
            <li className='skill-list'>Task Prioritization</li>
          </ul>
        </div>

      </div>
    </div>
  );
}