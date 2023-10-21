import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import CertificateCard from "./CertificateCards";
import GoogleUX from "../../Assets/Projects/GoogleUX.png";
import Metafrontend from "../../Assets/Projects/Metafrontend.png";
import Infosysml from "../../Assets/Projects/Infosysml.png";
import Verzeofe from "../../Assets/Projects/Verzeofe.png";
import CS50X from "../../Assets/Projects/CS50X.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        My <strong className="purple">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
            <CertificateCard
              imgPath={GoogleUX}
              isBlog={false}
              title="Google UX Design Professional Certificate"
              course="7 Courses"
              description1="→Foundations of User Experience (UX) Design"
              description2="→Start the UX Design Process: Empathize, Define, and Ideate"
              description3="→Build Wireframes and Low-Fidelity Prototypes"
              description4="→Conduct UX Research and Test Early Concepts"
              description5="→Create High-Fidelity Designs and Prototypes in Figma"
              description6="→Responsive Web Design in Adobe XD"
              description7="→Design a User Experience for Social Good Prepare for Jobs"
              
              cert="https://www.coursera.org/account/accomplishments/professional-cert/XKFJ3RBGZPS6"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Metafrontend}
              isBlog={false}
              title="Meta Front-End Developer Professional Certificate"
              course="9 Courses"
              description1="→Introduction to Front-End Development"
              description2="→Programming with JavaScript"
              description3="→Version Control"
              description4="→HTML and CSS in depth"
              description5="→React Basics"
              description6="→Advanced React"
              description7="→Principles of UX/UI Design"
              description8="→Front-End Developer Capstone"
              description9="→Coding Interview Preparation"
              
              cert="https://www.coursera.org/account/accomplishments/professional-cert/VSJ3RWVGPAJM"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Infosysml}
              isBlog={false}
              title="Machine Learning - Infosys Springboard"
              course="6 Courses"
              description1="→Data Visulization using Python"
              description2="→Explore Machine Language using Python"
              description3="→Introduction to Artificial Intelligence"
              description4="→Introduction to Data Science"
              description5="→Introduction to Deep Learning"
              description6="→Python for Data Science"
              
              cert="https://1drv.ms/f/s!AmRJSrMufHupiPp7jNgOQI3JGQdKXA?e=RtecOd"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Verzeofe}
              isBlog={false}
              title="Front-End Development with React.JS"
              description1="→HTML & CSS"
              description2="→JavaScript"
              description3="→Bootstrap"
              description4="→React JS"
              description5="→Git"
              description6="→SASS"
              
              cert="https://1drv.ms/i/s!AmRJSrMufHuplJcoxET1tK-iawSWgA?e=5sAJSg"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={CS50X}
              isBlog={false}
              title="CS50X - Introduction to Computer Science by Harvard University"
              description1="→C"
              description2="→Algorithms and Data Structures"
              description4="→Python"
              description5="→Strucured Query Language"
              description6="→HTML, CSS, and JavaScript"
              description7="→Flask"
              cert="https://cs50.harvard.edu/certificates/1cb1a18f-a6f1-41b3-9026-e1337e11b585"
            />
          </Col>

        </Row>


      </Container>
    </Container>
  );
}

export default Projects;
