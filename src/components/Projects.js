import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projectImage from "../images/newproject.avif";
import ProjectImage1 from "../images/image1.webp";
import ProjectImage2 from "../images/image2.webp";
import ProjectImage3 from "../images/image3.webp";
import ProjectImage4 from "../images/image4.webp";

const images = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4];

function Projects() {
  return (
    <>
      <div
        style={{ marginTop: "10px", padding: "5px", backgroundColor: "white" }}
      >
        {/* First section */}
        <div
          style={{
            marginTop: "10px",
            padding: "5px",
            backgroundColor: "white",
          }}
        >
          <Row xs={1} md={1} lg={1} className="g-3">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={idx}>
                <Card
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: "20px", // Add padding for better spacing
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "5vh",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "7vh",
                        paddingRight: "20px",
                        paddingLeft: "20px",
                      }}
                    >
                      <Card.Title
                        style={{
                          fontWeight: "bold",
                          fontSize: "30px",
                          textAlign: "center",
                        }}
                      >
                        We Have Many Years Experience in Consultant Business
                      </Card.Title>
                      <Card.Text
                        style={{ fontSize: "12px", textAlign: "center" }}
                      >
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                        <br /> This is a longer card with supporting text below
                        as a natural lead-in to additional content. This content
                        is a little bit longer.
                        <br /> This is a longer card with supporting text below
                        as a natural lead-in to additional content. This content
                        is a little bit longer.
                        <br /> This is a longer card with supporting text below
                        as a natural lead-in to additional content. This content
                        is a little bit longer. <br />
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Button
                        style={{ marginTop: "30px", alignSelf: "center" }}
                      >
                        Know More
                      </Button>
                    </div>
                    <div style={{ flex: 1, marginLeft: "20px" }}>
                      <Card.Img
                        variant="top"
                        src={projectImage}
                        style={{ width: "100%", height: "50vh" }}
                      />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        {/* Second section */}
        <Row
          xs={1}
          md={4}
          className="g-4"
          style={{ marginTop: "20px", marginBottom: "80px" }}
        >
          {images.map((image, idx) => (
            <Col key={idx}>
              <Card style={{ width: "100%", height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={image}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Projects;
