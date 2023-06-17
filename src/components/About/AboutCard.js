import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"><b>Sivadharshan</b> </span>
            from <span className="purple"><b>TamilNadu, India</b> </span>.
            <br /> I am a final year student pursuing Bachelors in 
            <span className="purple"><b> Electrical and Electronics Engineering </b></span>
             at <span className="purple"><b>SRM TRP Engineering College</b></span>. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating content in Instagram for Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creativity is Endless Opportunity!"{" "}
          </p>
          <footer className="blockquote-footer">Sivadharshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
