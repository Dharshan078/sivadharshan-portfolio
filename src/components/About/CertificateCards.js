import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TbCertificate } from "react-icons/tb";


function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>{props.course}</Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description1}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description3}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description4}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description5}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description6}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description7}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description8}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description9}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description0}
        </Card.Text>
        
        
        {props.cert && (
          //This will generate only github button if ghLink is only present
          <Button variant="primary" href={props.cert} target="_blank" >
          <TbCertificate /> &nbsp;
          {props.isDemo ? "Blog" : "View"}
        </Button>
        )
        }
        

        {"\n"}
        {"\n"}
        
      </Card.Body>
    </Card>
  );
}
export default CertificateCards;
