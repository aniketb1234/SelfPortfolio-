import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJirasoftware,
  SiAmazonaws,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
	  <SiJirasoftware />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
	  <SiAmazonaws />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
	  <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;