import "./skills.scss";
import Javascript from "../../../images/javascript.png";
import NextJS from "../../../images/nextjs.webp";
import React from "../../../images/reactjs.png";
import Redux from "../../../images/redux.png";
import Node from "../../../images/nodejs.png";
import Express from "../../../images/express.png";
import MongoDBAtlas from "../../../images/mongodbatlas.png";
import Postman from "../../../images/postman.png";
import Tailwind from "../../../images/tailwind.png";
import Sass from "../../../images/sass.png";
import Git from "../../../images/git.png";
import Github from "../../../images/github.png";
import AdobeXD from "../../../images/adobexd.png";
import Photoshop from "../../../images/photoshop.png";
import SkillsContainer from "../../../components/SkillsContainer/SkillsContainer";
import Logo from "../../../images/joris-bg.png";
import { useTranslation } from "react-i18next";

const skillsData = [
  { imageIcon: Javascript, alt: "Javascript" },
  { imageIcon: NextJS, alt: "NextJS" },
  { imageIcon: React, alt: "React" },
  { imageIcon: Redux, alt: "Redux" },
  { imageIcon: Node, alt: "Node" },
  { imageIcon: Express, alt: "Express" },
  { imageIcon: MongoDBAtlas, alt: "MongoDBAtlas" },
  { imageIcon: Postman, alt: "Postman" },
  { imageIcon: Tailwind, alt: "Tailwind" },
  { imageIcon: Sass, alt: "Sass" },
  { imageIcon: Git, alt: "Git" },
  { imageIcon: Github, alt: "Github" },
  { imageIcon: AdobeXD, alt: "AdobeXD" },
  { imageIcon: Photoshop, alt: "Photoshop" },
];

function Skills() {
  const { t } = useTranslation();

  const downloadFile = () => {
    fetch("CV_Benmehal_Joris.pdf").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "CV_Benmehal_Joris.pdf";
        a.click();
      });
    });
  };

  return (
    <>
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <SkillsContainer skills={skillsData} />
        <div className="skills__container">
          <div className="skills__container--content" onClick={downloadFile}>
            <img src={Logo} className="skills__container--content--img" />
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="skills__container--content--svg"
            >
              <path
                id="circlePath"
                fill="transparent"
                strokeWidth="4"
                stroke="none"
                d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        "
              />
              <text id="text" fill="#82dff6" textAnchor="middle">
                {/* <textPath id="textPath" href="#circlePath" startOffset="50%">
                  CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV
                  &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
                  CV&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;CV
                </textPath> */}
                <textPath id="textPath" href="#circlePath" startOffset="50%">
                  Resume&nbsp;&nbsp;•&nbsp;&nbsp;Resume&nbsp;&nbsp;•&nbsp;&nbsp;Resume&nbsp;&nbsp;•&nbsp;&nbsp;Resume&nbsp;&nbsp;•&nbsp;&nbsp;Resume
                  &nbsp;&nbsp;•&nbsp;&nbsp;Resume&nbsp;&nbsp;•&nbsp;&nbsp;Resume&nbsp;&nbsp;•&nbsp;&nbsp;Resume&nbsp;&nbsp;•
                </textPath>
              </text>
            </svg>
          </div>
          <p className="skills__container--citation">{t("Skills.Text")}</p>
        </div>
      </section>
    </>
  );
}

export default Skills;
