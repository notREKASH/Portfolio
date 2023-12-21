import "./hamburger-menu.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function HamburgerMenu() {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
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
        className={`hamburgerMenuContainer ${menuOpen ? "active" : ""}`}
      ></div>
      <div className={`navigation ${menuOpen ? "active" : "inactive"}`}>
        <ul>
          <li>{t("HamburgerMenu.Accueil")}</li>
          <li>{t("HamburgerMenu.AboutMe")}</li>
          <li>{t("HamburgerMenu.Project")}</li>
        </ul>
      </div>
      <div
        className={`hamburgerMenu ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburgerMenu--span"></span>
        <span className="hamburgerMenu--span"></span>
        <span className="hamburgerMenu--span"></span>
      </div>
    </>
  );
}

export default HamburgerMenu;
