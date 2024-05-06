import CardProject from "../../../components/CardProject/CardProjet";
import "./projects.scss";
import ChezValerie from "../../../images/chezvalerie-videgrenier.fr.png";
import BJTreklife from "../../../images/bj-treklife.fr.png";
import ArgentBank from "../../../images/ArgentBank.png";
import ArticleSheet from "../../../images/chezvalerie-article-sheet.png";
import Portfolio from "../../../images/portfolio.png";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  website?: string;
  github?: string;
  filters: { name: string; bgColor: string; fontColor: string }[];
}

function Projects() {
  const { t } = useTranslation();

  const projectsData : ProjectProps[] = [
    {
      title: "Chez Valérie",
      description: t("Projects.ChezValerie"),
      image: ChezValerie,
      website: "https://chezvalerie-videgrenier.fr/",
      filters: [
        { name: "HTML", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "SASS", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "JS", bgColor: "#3A3549", fontColor: "#FFF" },
        { name: "PHP", bgColor: "#252F47", fontColor: "#82dff6" },
      ],
    },
    {
      title: "BJ-Treklife",
      description: t("Projects.BJTreklife"),
      image: BJTreklife,
      github: "https://github.com/notREKASH/bj-treklife",
      website: "https://www.bj-treklife.fr/",
      filters: [
        { name: "NextJS", bgColor: "#252F47", fontColor: "#FFF" },
        { name: "SASS", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "Express", bgColor: "#7C7707", fontColor: "#FFFF00" },
        { name: "MongoDb", bgColor: "#2a4725", fontColor: "#84f786" },
      ],
    },
    {
      title: "Portfolio",
      description: t("Projects.Portfolio"),
      image: Portfolio,
      github: "https://github.com/notREKASH/Portfolio",
      filters: [
        { name: "React", bgColor: "#252F47", fontColor: "#82dff6" },
        { name: "SASS", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "Express", bgColor: "#7C7707", fontColor: "#FFFF00" },
        { name: "AG Grid", bgColor: "#0e4491", fontColor: "#5c9cf7" },
      ],
    },
    {
      title: t("Projects.ArticleSheets.Title"),
      description: t("Projects.ArticleSheets.Description"),
      image: ArticleSheet,
      github: "https://github.com/notREKASH/Form-XLSX",
      filters: [
        { name: "React", bgColor: "#252F47", fontColor: "#82dff6" },
        { name: "SASS", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "XLSX", bgColor: "#252F47", fontColor: "#82dff6" },
      ],
    },
    {
      title: "Argent Bank",
      description: t("Projects.ArgentBank"),
      image: ArgentBank,
      github: "https://github.com/notREKASH/Projet_11_Benmehal_Joris",
      filters: [
        { name: "React", bgColor: "#252F47", fontColor: "#82dff6" },
        { name: "Redux", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "SASS", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "Swagger", bgColor: "#2a4725", fontColor: "#84f786" },
      ],
    },
  ];

  interface settingsProps {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    responsive: { breakpoint: number; settings: { slidesToShow: number; slidesToScroll: number; initialSlide: number } }[];
  }

  const settings : settingsProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="projects" id="projects">
        <h2>{t("Projects.Title")} </h2>
        <div className="projects__container">
          <Slider {...settings}>
            {projectsData.map((project, index) => (
              <CardProject
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                website={project.website}
                github={project.github}
                filters={project.filters}
              />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Projects;
