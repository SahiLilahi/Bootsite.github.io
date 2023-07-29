import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faGlobe,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const titles = [
    "Financial Consulting",
    "Content Marketing",
    "Finance Advice",
  ];

  // Array of corresponding icons for each title
  const icons = [faStar, faGlobe, faMoneyBillWave];

  return (
    <>
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#f0f8ff",
          minHeight: "55vh",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            textDecorationLine: "underline",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          Our Services
        </h1>
        <Row xs={1} md={3} className="g-3" style={{ marginTop: "70px" }}>
          {titles.map((title, idx) => (
            <Col key={idx} style={{ marginBottom: "20px" }}>
              <Card style={{ maxHeight: "60vh", backgroundColor: "white" }}>
                {/* Icon positioned absolutely on top border of the card */}
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={icons[idx]}
                    size="2x"
                    color="#ffcc00"
                  />
                </div>

                <Card.Body style={{ marginTop: "30px" }}>
                  <Card.Title
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {title}
                  </Card.Title>
                  <Card.Text style={{ marginTop: "15px", textAlign: "center" }}>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Services;
