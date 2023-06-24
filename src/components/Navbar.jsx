import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import logo from "../assets/Logo.ico";
import world from "../assets/world.png"

const Navbar = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-tertiary flex flex-row h-[5em] items-center justify-between ">
        <div className="m-[1rem] flex flex-row items-center gap-2">
          <img className="h-[3em] logo-e" src={logo} alt="Logo" />
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-base cssh1 font-bold text-center">
              Eliana Guarino
            </h1>
            <h2 className="text-white text-[14px]">
              Developer Full-Stack MERN
            </h2>
            <h2 className="text-white text-[14px] text-center">& Mobile</h2>
          </div>
        </div>
        <div className="flex gap-5 mr-10 flex-row items-center">
          <Link className="text-white text-lg font-bold" to="/">
            {t("home")}
          </Link>
          <Link className="text-white text-lg font-bold" to="/about-as">
            {t("about")}
          </Link>
          <Link className="text-white text-lg font-bold" to="/proyects">
            {t("projects")}
          </Link>
          <Link className="text-white text-lg font-bold" to="/contact">
            {t("contact")}
          </Link>
          <Link className="text-white text-lg font-bold" to="/skills">
            {t("skills")}
          </Link>
          <div className="flex items-center ml-[2rem]">
            {!isLanguageMenuOpen && (
              <span className="text-white text-sm font-bold mr-2 flex items-center">
                {t("language")}:
              </span>
            )}
            {isLanguageMenuOpen && (
              <div className="language-menu flex text-white text-sm font-bold flex-col">
                <button onClick={() => changeLanguage("es")}>Spanish</button>
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("it")}>Italian</button>
              </div>
            )}
            {!isLanguageMenuOpen && (
              <img
                className="h-[2rem]"
                src={world}
                alt="Logo"
                onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
