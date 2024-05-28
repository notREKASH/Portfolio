import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./header.scss";
import { useEffect } from "react";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import { useTranslation } from "react-i18next";

const icons: { name: string; link: string; icon: string }[] = [
  { name: "Github", link: "https://github.com/notREKASH", icon: Github },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/joris-benmehal-6266a427a/",
    icon: Linkedin,
  },
];

function Header() {
  const [windowsWidth, setWindowsWidth] = useState<number>(window.innerWidth);
  const { t } = useTranslation();

  const navigationLinks: { name: string; link: string }[] = [
    { name: t("Header.APropos"), link: "#about" },
    { name: t("Header.Competences"), link: "#skills" },
    { name: t("Header.Projets"), link: "#projects" },
    { name: t("Header.Contact"), link: "#contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowsWidth < 1024) {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav__ul">
            <a href="/">
              <h1>BJ</h1>
            </a>
            <HamburgerMenu />
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav__ul">
            <a href="/">
              <h1>BJ</h1>
            </a>
            <div className="header__nav__ul--links">
              {navigationLinks.map((link, index) => (
                <div key={index} className="links">
                  <div>
                    <div className="links__svg-wrapper">
                      <svg
                        height="40"
                        width="150"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="40" width="150" />
                      </svg>
                      <div className="links__svg-wrapper--text">
                        <a href={link.link} className="test">
                          {link.name}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="header__nav__ul--icons">
              {icons.map((icon, index) => (
                <div key={index} className="icons">
                  <a href={icon.link}>
                    <img src={icon.icon} alt={icon.name} />
                  </a>
                </div>
              ))}
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
