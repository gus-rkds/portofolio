import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import triptrip from "../../Assets/Projects/triptrip.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import movies from "../../Assets/Projects/movies.jpg";
import nft from "../../Assets/Projects/nft.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={movies}
              isBlog={false}
              title="The movies place"
              description="movies app made with React, styled with Sass and the MovieDB API to fetch movie data, it allows you to find all kind of movies and tv series, when you click on a movie or tv serie it will show you a detailed description of the movie and the cast in addition to trailers published on youtube"
              link="https://themoviesplace.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="A To Do App built using React.js and vanilla CSS which allow you to add, delete and edit your tasks with the help of hooks."
              link="https://to-do-list-drj6xj7d4-lordrakdos13.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="Big Heads club"
              description="this is an NFTs landing page for the Big Heads club, it allows you see some nft tokens in a Carousel and other cool effects, the fake NFTs are generated using the random avatar generator from BigHeads.io"
              link="https://the-big-heads.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={triptrip}
              isBlog={false}
              title="Trip Trip"
              description="this is my first Landing page, built with basic html, Bootstrap and CSS, it has a beautiful design and decoration."
              link="https://gus-rkds.github.io/trip-trip/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
