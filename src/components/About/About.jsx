import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../Assets/about3.svg";
import Skills from "../skills";
import {
  FaLanguage,
  FaGamepad,
  FaUmbrellaBeach,
  FaBook,
  FaHeart,
} from "react-icons/fa";

export default function About() {
  return (
    <Container fluid className="text-white about-section" id="about">
      <Container>
        <Row className="rows d-flex align-items-center">
          <Col lg={7} md={6} className="d-flex flex-column text-center">
            <h2 className="h1">
              Know who <span className="celeste">I am</span>
            </h2>
            <br />
            <p className="h4">
              I am
              <span className="celeste"> Gustavo Alviarez </span>
              from
              <span className="celeste"> Venezuela.</span>
            </p>
            <p className="h4">
              I am a junior fascinated by the world of web development
            </p>
            <br />
            <h4>
              apart from coding, other activities that I <FaHeart />
            </h4>
            <br />
            <ul className="h3 list-unstyled">
              <li className="pb-3">
                <span>Languages </span>
                <FaLanguage size={40} />
              </li>
              <li className="pb-3">
                <span>Games </span>
                <FaGamepad size={40} />
              </li>
              <li className="pb-3">
                <span>Beach </span>
                <FaUmbrellaBeach size={35} />
              </li>
              <li>
                <span>Read </span>
                <FaBook size={30} />
              </li>
            </ul>
            <br />
            <blockquote className="col-12 text-white text-center">
              <footer>
                <cite className="text-muted">
                  “Live as if you were to die tomorrow. Learn as if you were to
                  live forever.” <br />
                  -Mahatma Gandhi.
                </cite>
              </footer>
            </blockquote>
          </Col>
          <Col lg={5} md={6}>
            <img
              src={about}
              alt="about pic"
              className="img-fluid d-flex align-items-center justify-content-center"
              style={{ maxHeight: "450px" }}
            ></img>
          </Col>
        </Row>
        <Skills />
      </Container>
    </Container>
  );
}
