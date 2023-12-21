import "./download-cv.scss";
import DownloadIco from "../../images/telecharger.png";
import { useTranslation } from "react-i18next";

function DownloadCV() {
  const { t } = useTranslation();

  const downloadFile = () => {
    if (t("DownloadCV.Langue") === "Français") {
      fetch("CV_FR_Benmehal_Joris.pdf").then((response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "CV_FR_Benmehal_Joris.pdf";
          a.click();
        });
      });
    } else {
      fetch("CV_EN_Benmehal_Joris.pdf").then((response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "CV_EN_Benmehal_Joris.pdf";
          a.click();
        });
      });
    }
  };

  return (
    <>
      <button className="downloadCv" onClick={downloadFile}>
        <img src={DownloadIco} alt="" />
        {t("DownloadCV.CV")}
      </button>
    </>
  );
}

export default DownloadCV;
