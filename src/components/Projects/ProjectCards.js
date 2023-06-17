import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {FiFigma} from "react-icons/fi"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.ghLink && (
          //This will generate only github button if ghLink is only present
          <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isDemo ? "Blog" : "GitHub"}
        </Button>
        )
        }
        

        {"\n"}
        {"\n"}

        {props.figma && !props.demoLink &&(
          //This will generate only figma button if figma is present and it should'nt have demo link
          <Button
          variant="primary"
          href={props.figma}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <FiFigma /> &nbsp;
          {"Figma"}
        </Button>
        )
        }

        {props.figma && props.demoLink && (
          //This will generate figma and demo link button if figma and demoLink is present
          <>
          <Button
            variant="primary"
            href={props.figma}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FiFigma /> &nbsp;
            {"Figma"}
          </Button>
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Case Study"}
          </Button>
          </>
        )}
 
        {!props.figma && !props.ghLink && (
          //This will generate only project report button if figma and gh link lis not present
          <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Project Report"}
        </Button>
        )}


        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
