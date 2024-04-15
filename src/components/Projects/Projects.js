import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.jpeg";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.jpeg";
import formBuilder from "../../Assets/Projects/formBuilder.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, SpringBoot and socket.io. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/aniketb1234/ChatApp"
              demoLink="https://chatapp-eight-fawn.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="Resume Builder"
              description="Resume builder that streamlines the process of creating professional resumes. This innovative tool seamlessly integrates with Next.js, harnessing its capabilities to deliver a fast, responsive, and dynamic user experience."
			  ghLink="https://github.com/aniketb1234/ResumeBuilder"
              demoLink="https://resume-builder-pi-gilt.vercel.app/"
            />
          </Col>

		  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formBuilder}
              isBlog={false}
              title="Form-Builder Npm Library"
              description="Form-Builder npm library designed to streamline the creation of dynamic forms with ease. Built with React.js and tailored for simplicity, this library offers a robust set of features for developers to customize forms effortlessly."
              ghLink="https://github.com/aniketb1234/form-builder-demo"
              demoLink="https://form-builder-demo-lyart.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
