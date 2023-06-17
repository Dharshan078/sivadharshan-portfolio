import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Brazillia from "../../Assets/Projects/Brazillia.png";
import BrazilliaM from "../../Assets/Projects/BrazilliaM.png";
import Little from "../../Assets/Projects/Little.png";
import Jobs from "../../Assets/Projects/Jobs.png";
import DU from "../../Assets/Projects/Duni.png";
import BLDC from "../../Assets/Projects/BLDC.png";

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
              imgPath={Brazillia}
              isBlog={false}
              title="Brazillia Italia"
              description="Brazillia Italia is an website for Italian restaurant focused on selling their kitchen products. It is developed using React.js a Javascript's framework and designed by Bootstrap a CSS Library. "
              ghLink="https://github.com/Dharshan078/Brazilia-Italia-Restaurant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Little}
              isBlog={false}
              title="Little Lemon"
              description="Little Lemon is an website for Mediterranean Restaurant focused on reserving table using their website and the reservation form is developed using React Forms and It has its Validation In Client Side."
              ghLink="https://github.com/Dharshan078/Little-Lemon-Mediterranean-Restaurant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrazilliaM}
              isBlog={false}
              title="Brazillia Italia Mobile"
              description="Brazillia Italia Mobile is a UX-UI Design designed using Figma, Its focus is to design a food delivery system on their mobile app. For designing this design two User researches has been taken. "
              figma="https://www.figma.com/file/CvzOYlC4OfEbs1fLKuccCk/bi-hifi-app?type=design&node-id=0%3A1&t=5qcqm4LzjkiXv1ak-1"
              demoLink="https://sivadharshan980.wixsite.com/dharshan-uxportfolio/general-7"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jobs}
              isBlog={false}
              title="Jobs Here"
              description="Jobs Here is multi platform website UX-UI Design designed using Figma, The objective of this design is to design a platform for searching and applying for Remote, Part-Time, Full-Time Jobs and Social Media."
              figma="https://www.figma.com/file/UYN5pGqVIzebzgqWiLnMHP/jobshere.web?type=design&node-id=0%3A1&t=8ch8EoT95DOTBWoj-1"
              demoLink="https://sivadharshan980.wixsite.com/dharshan-uxportfolio/copy-of-bi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DU}
              isBlog={false}
              title="D University"
              description="D University is a UX-UI Design for Mobile app designed using Figma, The objective is to design this app to track the student works, Daily Schedule, Their grades, Exam Schedule, Canteen Food Items, Transportation News and much more."
              figma="https://www.figma.com/file/5YFjoBGvhCAW7jUAuxvk6N/D-University?type=design&node-id=0%3A1&t=uWlfer7QAO1FWjPP-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BLDC}
              isBlog={false}
              title="BLDC Motor Controller IoT Based Monitoring System"
              description="A wireless monitoring and control system for Brushless DC (BLDC) motors is presented in this paper to improve the
              efficiency and reliability of BLDC motor control.
              Using the wireless module, motor operations can be controlled and monitored remotely via the internet.
              Temperature, current, and voltage are also monitored with various sensors"
              demoLink="https://drive.google.com/file/d/1TSNRs3ptEptE1NHGnUlIg7BzrLde4A6l/view"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
