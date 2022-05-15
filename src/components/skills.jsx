import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiNodejs,
  DiReact,
  DiSass,
} from "react-icons/di";
import { SiNextdotjs, SiJest } from "react-icons/si";

export default function Skills() {
  return (
    <Container fluid className="text-white skills-container">
      <h1 className="text-center">Skillset</h1>
      <br />
      <Row className="justify-content-center align-items-center">
        <Col xs={4} md={2} className="skills-icons">
          <DiHtml5 size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiCss3 size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiJsBadge size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiReact size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiNodejs size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiGit size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiBootstrap size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <DiSass size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <SiNextdotjs size={80} />
        </Col>
        <Col xs={4} md={2} className="skills-icons">
          <SiJest size={80} />
        </Col>
      </Row>
    </Container>
  );
}
