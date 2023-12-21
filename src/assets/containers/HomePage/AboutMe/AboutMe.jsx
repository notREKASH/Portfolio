import AboutCard from "../../../components/AboutCard/AboutCard";
import "./about-me.scss";
import Diplome from "../../../images/diplome.png";
import Experience from "../../../images/experience.png";
import Nationalite from "../../../images/nationalite.png";
import Competences from "../../../images/competence.png";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  const aboutMeData = [
    {
      title: t("AboutMe.Nationalite"),
      imageIcon: Nationalite,
      description: t("AboutMe.Description.Nationalite"),
    },
    {
      title: t("AboutMe.Experience"),
      imageIcon: Experience,
      description: t("AboutMe.Description.Experience"),
    },
    {
      title: t("AboutMe.Diplome"),
      imageIcon: Diplome,
      description: t("AboutMe.Description.Diplome"),
    },
    {
      title: t("AboutMe.Competences"),
      imageIcon: Competences,
      description: t("AboutMe.Description.Competences"),
    },
    {
      title: t("AboutMe.Competences"),
      imageIcon: Competences,
      description: t("AboutMe.Description.Competences"),
    },
  ];

  return (
    <>
      <section className="aboutMe" id="about">
        <h2>{t("AboutMe.AboutMe")}</h2>
        <div className="aboutMe__container">
          {aboutMeData.map((aboutMeData, index) => (
            <AboutCard
              key={index}
              title={aboutMeData.title}
              imageIcon={aboutMeData.imageIcon}
              description={aboutMeData.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutMe;
