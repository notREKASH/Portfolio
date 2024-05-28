import FooterButton from "./FooterButton/FooterButton";
import "./footer.scss";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import { useTranslation } from "react-i18next";

const footerLinks = [
  { name: "Github", link: "https://github.com/notREKASH", icon: Github },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/joris-benmehal-6266a427a/",
    icon: Linkedin,
  },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <h3>{t("Footer.RetrouvezMoi")} </h3>
      <div className="footer__container">
        {footerLinks.map((link, index) => (
          <FooterButton
            key={index}
            icon={link.icon}
            link={link.link}
            alt={link.name}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
