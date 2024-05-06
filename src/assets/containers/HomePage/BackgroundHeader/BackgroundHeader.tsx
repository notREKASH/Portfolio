import "./background-header.scss";
import JorisBackgroundHeader from "../../../components/JorisBackgroundHeader/JorisBackgroundHeader";
import DownloadCV from "../../../components/DownloadCv/DownloadCV";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import icoFra from "../../../images/ico_fra.png";
import icoEng from "../../../images/ico_eng.webp";
import React from "react";

function BackgroundHeader() {
  const { t } = useTranslation();

  return (
    <>
      <div className="backgroundHeader">
        <div className="backgroundHeader__content">
          <div className="backgroundHeader__content--text">
            <div className="langage-button">
              <button onClick={() => i18n.changeLanguage("en")}>
                <img src={icoEng} alt="English langage" />
              </button>
              <button onClick={() => i18n.changeLanguage("fr")}>
                <img src={icoFra} alt="Langue Français" />
              </button>
            </div>
            <p className="backgroundHeader__content--text--hello">
              {t("BackgroundHeader.BonjourJeSuis")} <br />
            </p>
            <div className="backgroundHeader__content--moduleBorderWrapper">
              <h1>Benmehal Joris</h1>
            </div>
            <p className="backgroundHeader__content--text--frontend">
              {t("BackgroundHeader.Developpeur")}
            </p>
            <div className="backgroundHeader__content--text--cv">
              <DownloadCV />
            </div>
          </div>
          <JorisBackgroundHeader />
        </div>
      </div>
    </>
  );
}

export default BackgroundHeader;
