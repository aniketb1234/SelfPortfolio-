import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiJava, SiSpringboot, SiReact, SiNodedotjs, SiMysql, SiMongodb } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <span className="purple">Aniket Bhujbal</span>, a passionate Full Stack Developer with 2+ years of experience building scalable web applications. Currently working at <span className="purple">Flairminds Software Pvt. Ltd.</span> in Pune, India.
              <br />
              <br />
              I specialize in:
              <div className="tech-icons-container">
                <SiJava className="tech-icon" title="Java" />
                <SiSpringboot className="tech-icon" title="Spring Boot" />
                <SiReact className="tech-icon" title="React" />
                <SiNodedotjs className="tech-icon" title="Node.js" />
                <SiMysql className="tech-icon" title="MySQL" />
                <SiMongodb className="tech-icon" title="MongoDB" />
              </div>
              <br />
              My professional journey includes developing:
              <ul className="professional-highlights">
                <li><span className="purple">Scrap Management Platform</span> with React, Node, and Frappe framework</li>
                <li><span className="purple">Bank Lending Application</span> using Spring Boot and React</li>
                <li><span className="purple">Money Transfer System</span> with Java/JSP</li>
              </ul>
              <br />
              I hold a <span className="purple">PG-DAC from IACSD Akurdi</span> (CDAC) and a Bachelor's degree in Civil Engineering with 8.6 CGPA.
              <br />
              <br />
              When I'm not coding, I enjoy problem-solving on HackerRank, exploring new technologies, and contributing to open-source projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out </span>for collaborations or just a friendly chat!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aniketb1234"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aniket-bhujbal-179375227/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:bhujbal188695@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+919922397412"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Phone"
                >
                  <AiOutlinePhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://aniketbhujbal.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Portfolio"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AniketB6644"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anya_bhujbal_ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <div className="contact-info">
              <p>
                <AiOutlineMail /> bhujbal188695@gmail.com | 
                <AiOutlinePhone /> +91 9922397412 | 
                Portfolio: <a href="https://aniketbhujbal.netlify.app" target="_blank" rel="noreferrer">aniketbhujbal.netlify.app</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
