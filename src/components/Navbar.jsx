import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.ico";
import world from "../assets/world.png";
const Navbar = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageMenuOpen(false);
  };
  let Links = [
    { name: t("home"), link: "/#" },
    { name: t("about"), link: "/about-me" },
    { name: t("projects"), link: "/projects" },
    { name: t("contact"), link: "/contact" },
    { name: t("skills"), link: "/skills" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg w-full h-[2.20rem] sticky bg-tertiary z-50 top-0 left-0">
      <div className="lg:flex flex items-center justify-between bg-tertiary py-4 lg:px-10">
        <div className="flex flex-row items-center lg:pl-0 pl-7 gap-1">
            <img className="h-[2em] px-1 md:p-0 logo-e" src={logo} alt="Logo" />
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-[15px] cssh1 font-bold text-center">
                Eliana Guarino
              </h1>
              <h2 className="text-white text-[12px] md:text-[9px] ">
                Full-Stack (MERN) & Mobile
              </h2>
            </div>
          </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl text-white absolute right-8 top-center cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-tertiary lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-4 text-lg lg:my-0 my-2">
              <Link
                to={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex lg:ml-8 text-lg lg:my-0 my-3 items-center lg:ml-[2rem]">
        {!isLanguageMenuOpen && (
          <span className="text-white text-sm font-bold mr-2 flex items-center">
            {t("language")}:
          </span>
        )}
        {isLanguageMenuOpen && (
          <div className="language-menu flex text-white text-sm  flex-col">
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
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
