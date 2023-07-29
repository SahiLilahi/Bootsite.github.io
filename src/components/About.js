import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import aboutImage from "../images/aboutbg.jpg";

function About() {
  return (
    <>
      <div
        style={{
          height: "90vh",
          padding: "20px",
          textAlign: "center",
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          color: "white",
          alignItems: "center",
          paddingTop: "22vh",
        }}
      >
        <Card.Title
          style={{
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          We Are Consulting For Your Business Finances
        </Card.Title>
        <Card.Text style={{ fontSize: "12px" }}>
          This is a longer card with supporting text below as a natural lead-in
          to additional content.
          <br /> This content is a little bit longer. This is a longer card with
          supporting text below as a natural lead-in to additional content.
          <br /> This content is a little bit longer. This is a longer card with
          supporting text below as a natural lead-in to additional content.
          <br /> This content is a little bit longer.
        </Card.Text>
        <Button style={{ marginTop: "30px" }}>Start</Button>
      </div>
    </>
  );
}

export default About;
