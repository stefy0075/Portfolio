import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="bg-tertiary flex flex-row h-1/6 items-center justify-between">
      <div className="m-[1rem]">
        <img className="h-[4rem]" src="../../src/assets/Logo.ico" alt="Logo" />
      </div>
      <div className="flex gap-5 mr-10 flex-row items-center">
        <Link className="text-white text-xl" to="/">
          {t("home")}
        </Link>
        <Link className="text-white text-xl" to="/">
          {t("about")}
        </Link>
        <Link className="text-white text-xl" to="/">
          {t("projects")}
        </Link>
        <Link className="text-white text-xl" to="/">
          {t("contact")}
        </Link>
        <Link className="text-white text-xl" to="/">
          {t("skills")}
        </Link>
        <div className="flex items-center ml-[2rem]">
          {!isLanguageMenuOpen && (
            <span className="text-white text-xl mr-2 flex items-center">
              {t("language")}:
            </span>
          )}
          {isLanguageMenuOpen && (
            <div className="language-menu flex text-white text-xl flex-col">
              <button onClick={() => changeLanguage("es")}>Spanish</button>
              <button onClick={() => changeLanguage("en")}>English</button>
              <button onClick={() => changeLanguage("it")}>Italian</button>
            </div>
          )}
          {!isLanguageMenuOpen && (
            <img
              className="h-[2rem]"
              src="../../src/assets/world.png"
              alt="Logo"
              onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
            />
          )}
        </div>
        </div>
    </div>
  );
};

export default Navbar;
