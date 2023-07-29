import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faAnchor,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../images/logo1.avif";

const Header = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "skyblue",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Nav.Link href="#blog" style={{ color: "black" }}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Nav.Link>{" "}
          mail@gmail.com
        </div>
        <Container>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Nav.Link>
            <Nav.Link href="#about">
              <FontAwesomeIcon icon={faAnchor} />
            </Nav.Link>
            <Nav.Link href="#project">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Nav.Link>
            <Nav.Link href="#blog">
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
          </Nav>
        </Container>
      </div>

      <Navbar bg="white" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logoImage}
              alt="Logo"
              style={{ height: "40px", width: "auto" }}
            />
            <h1
              style={{
                color: "black",
                marginLeft: "20px", // Add some space between logo and title
                fontWeight: "bold",
                fontSize: "24px", // Adjust font size for responsiveness
              }}
            >
              Quantam
            </h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#service">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
