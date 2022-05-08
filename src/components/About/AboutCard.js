import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Basant Janghel </span>
            from <span className="purple"> Chhattisgarh, India.</span>
            <br />
            I am a B.Tech. Graduate in Computer Science and currently working as
            a Software Development Engineer at Shoopy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web Series
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "No one is YOU and that is your Power !"{" "}
          </p>
          <footer className="blockquote-footer">Basant</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
