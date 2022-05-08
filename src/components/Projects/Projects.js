import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoopyDesktop from "../../Assets/Projects/shoopydesktop.png";
import shoopyWebStore from "../../Assets/Projects/shoopywebstore.png";

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
              imgPath={shoopyDesktop}
              isBlog={false}
              title="Shoopy Desktop App"
              description="Shoopy Desktop App build with React.js, helps retailers and local business owners go online in a few seconds, and manage invoicing, billing, inventory tracking and management, among other aspects of their shops easily."
              link="https://web.shoopy.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoopyWebStore}
              isBlog={false}
              title="Shoopy Web Store"
              description="Shoopy Web Store build with Next.js, is an E-Commerce platform which helps retailers and local business owners to get online orders and store fully managed by the Shoopy Desktop and Mobile App."
              link="https://store.shoopy.in/yummy-momo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
