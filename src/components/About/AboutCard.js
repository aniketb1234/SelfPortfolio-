import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniket Bhujbal </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            <br />
            A passionate <span className="purple">Full Stack Developer</span> with 2+ years of experience at <span className="purple">Flairminds Software Pvt. Ltd.</span>, specializing in:
            <div className="tech-stack-icons">
              <FaJava title="Java" className="tech-icon" />
              <FaReact title="React" className="tech-icon" />
              <FaNodeJs title="Node.js" className="tech-icon" />
              <SiSpringboot title="Spring Boot" className="tech-icon" />
              <SiMysql title="MySQL" className="tech-icon" />
              <SiMongodb title="MongoDB" className="tech-icon" />
            </div>
            <br />
            I hold a <span className="purple">PG-DAC from IACSD Akurdi</span> (CDAC) and a <span className="purple">Bachelor's in Civil Engineering</span> from Zeal College with 8.6 CGPA.
            <br />
            <br />
            My key projects include:
            <ul>
              <li><ImPointRight /> Scrap Management Platform (React/Node/Frappe)</li>
              <li><ImPointRight /> Bank Lending Application (Spring Boot/React)</li>
              <li><ImPointRight /> Money Transfer System (Java/JSP)</li>
            </ul>
          </p>

          <p>
            Apart from coding, some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open source
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess and video games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Building scalable solutions with clean code and robust architecture"
          </p>
          <footer className="blockquote-footer">Aniket Bhujbal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
