import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

// Import the background image
import footerImage from "../images/footer.avif";

function Footer() {
  return (
    <>
      <div style={{ marginTop: "5px" }}>
        <Row xs={1} md={1} className="g-3 justify-content-center">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${footerImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Card.Body style={{ padding: "1rem" }}>
                  <div>
                    <Card.Title
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "30px",
                        textAlign: "left",
                      }}
                    >
                      Subscribe Our Newsletter For More Updates
                    </Card.Title>
                    <Card.Text
                      style={{
                        color: "white",
                        fontSize: "15px",
                        textAlign: "left",
                      }}
                    >
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Form.Group
                      controlId="formBasicEmail"
                      style={{ marginLeft: "950px" }}
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        style={{ width: "100%", maxWidth: "400px" }}
                      />
                    </Form.Group>
                    <Button style={{ width: "150px", marginRight: "215px" }}>
                      Subscribe
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Footer;
