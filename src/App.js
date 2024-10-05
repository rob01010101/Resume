import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Robby Pineda</h1>
        <h2>Director of Software Engineering</h2>
      </header>

      <div className="resume">
        <section className="contact">
          <h3>CONTACT</h3>
          <p>Email: robbypineda17@gmail.com</p>
          <p>Phone: 09054114002</p>
          <p>Location: Bulaon, City of San Fernando Pampanga</p>
          <p>
            <a href="https://www.linkedin.com/in/renatavoss">LinkedIn</a> |{' '}
            <a href="https://github.com/renatavoss">Github</a>
          </p>
        </section>

        <section className="education">
          <h3>EDUCATION</h3>
          <p>Bachelor of Science, Information and Technology</p>
          <p>University of the Assumption</p>
          <p>2022 - 2026</p>
        </section>

        <section className="skills">
          <h3>SKILLS</h3>
          <ul>
            <li>JIRA</li>
            <li>Amazon Web Services (AWS)</li>
            <li>Jenkins</li>
            <li>TensorFlow</li>
            <li>Spring Boot</li>
            <li>Apache Hadoop</li>
            <li>IDPS</li>
            <li>React Native</li>
            <li>Selenium</li>
            <li>Oracle</li>
          </ul>
        </section>

        <section className="experience">
          <h3>WORK EXPERIENCE</h3>

          <h4>Director of Software Engineering</h4>
          <p>Adobe | 2019 - Present | San Jose, CA</p>
          <ul>
            <li>Managed cross-functional teams on Jira, increasing production velocity by 23%.</li>
            <li>Integrated IDPS into systems, reducing socially engineered attacks to less than 1%.</li>
            <li>Boosted processes through Jenkins-backed workflows, improving quality by 54%.</li>
            <li>Achieved a 97% Net Promoter Score for error-free products.</li>
          </ul>

          <h4>Senior Engineering Manager</h4>
          <p>PayPal | 2014 - 2019 | San Jose, CA</p>
          <ul>
            <li>Resolved app incompatibility issues using AWS, reducing user-reported incidents by 92%.</li>
            <li>Decreased mobile app density defects by 31% by integrating React Native UI elements.</li>
            <li>Reduced average production cycle time by 17% across projects.</li>
            <li>Maintained a 94% user satisfaction rating through customer feedback surveys.</li>
          </ul>

          <h4>Principal Software Engineer</h4>
          <p>Intel | 2010 - 2014 | Santa Clara, CA</p>
          <ul>
            <li>Optimized storage and dataset processing through Apache Hadoop, increasing capacity by 47%.</li>
            <li>Automated web app testing with Selenium, reducing user-reported defects by 68%.</li>
            <li>Led a team of 4 engineers to upgrade Oracle databases with 98% on-time delivery.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
