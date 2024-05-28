import "./hamburger-menu.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function HamburgerMenu() {
  const { t } = useTranslation();

  const hamburgerMenu: { name: string; link: string }[] = [
    {
      name: `${t("HamburgerMenu.Accueil")}`,
      link: "/",
    },
    {
      name: `${t("HamburgerMenu.APropos")}`,
      link: "#about",
    },
    {
      name: `${t("HamburgerMenu.Competences")}`,
      link: "#skills",
    },
    {
      name: `${t("HamburgerMenu.Projets")}`,
      link: "#projects",
    },
    {
      name: `${t("HamburgerMenu.Contact")}`,
      link: "#contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`hamburgerMenuContainer ${menuOpen ? "active" : ""}`}></div>
      <div className={`navigation ${menuOpen ? "active" : "inactive"}`}>
        <ul>
          {hamburgerMenu.map((nav, index) => {
            return (
              <li key={index}>
                <a
                  href={nav.link}
                  onClick={toggleMenu}
                  className="hamburger-link">
                  {nav.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`hamburgerMenu ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}>
        <span className="hamburgerMenu--span"></span>
        <span className="hamburgerMenu--span"></span>
        <span className="hamburgerMenu--span"></span>
      </div>
    </>
  );
}

export default HamburgerMenu;
