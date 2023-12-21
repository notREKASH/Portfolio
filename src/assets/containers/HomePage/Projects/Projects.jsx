import CardProject from "../../../components/CardProject/CardProjet";
import "./projects.scss";
import ChezValerie from "../../../images/chezvalerie-videgrenier.fr.png";
import BJTreklife from "../../../images/bj-treklife.fr.png";
import ArgentBank from "../../../images/ArgentBank.png";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projectsData = [
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
      website: "https://www.bj-treklife.fr/",
      filters: [
        { name: "NextJS", bgColor: "#252F47", fontColor: "#FFF" },
        { name: "SASS", bgColor: "#392647", fontColor: "#f784f5" },
        { name: "Express", bgColor: "#7C7707", fontColor: "#FFFF00" },
        { name: "MongoDb", bgColor: "#2a4725", fontColor: "#84f786" },
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

  const settings = {
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
        <h2>{t("Projects.Projects")} </h2>
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
