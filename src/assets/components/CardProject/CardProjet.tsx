import "./card-projet.scss";
import GithubImage from "../../images/github.png";
import LiveImage from "../../images/live.png";
import FilterButton from "./FilterButton/FilterButton";
import { useTranslation } from "react-i18next";

interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  website?: string;
  github?: string;
  filters: { name: string; bgColor: string; fontColor: string }[];
}

function CardProject({
  title,
  description,
  image,
  website,
  github,
  filters = [],
}: CardProjectProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="card-project">
        <img className="card-project--img" src={image} alt={title} />
        <div className="card-project__content">
          <h3>{title}</h3>
          <p className="card-project__content--description">{description}</p>
          <div className="card-project__content--tag">
            {filters.map((filter, index) => (
              <FilterButton
                key={index}
                name={filter.name}
                bgColor={filter.bgColor}
                fontColor={filter.fontColor}
              />
            ))}
          </div>
          <div className="card-project__content--link">
            {website && (
              <a href={website}>
                <img src={LiveImage} alt={website} />
                {t("CardProject.Previsualisation")}
              </a>
            )}
            {github ? (
              <a href={github}>
                <img src={GithubImage} alt={github} />
                {t("CardProject.VoirCode")}
              </a>
            ) : (
              <a>
                <img src={GithubImage} alt={github} />
                <p>{t("CardProject.SurDemande")}</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
