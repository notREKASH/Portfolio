import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MatrixRain from "../../components/MatrixRain/MatrixRain";
import AboutMe from "./AboutMe/AboutMe";
import BackgroundHeader from "./BackgroundHeader/BackgroundHeader";
import Form from "./Form/Form";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import "./home-page.scss";

function HomePage() {
  return (
    <div className="home-page">
      <MatrixRain />
      <Header />
      <BackgroundHeader />
      <AboutMe />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default HomePage;
