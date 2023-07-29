import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header id="#" />
      <About id="about" />
      <Project id="project" />
      <Services id="service" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
