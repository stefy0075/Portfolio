import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo.ico';
import world from '../assets/world.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Agregue el listener inmediatamente para forzar una verificación inicial
    handleScroll(); // Verificación inicial
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const Links = [
    { name: t('home'), link: '#home' },
    { name: t('about'), link: '#about' },
    { name: t('projects'), link: '#projects' },
    { name: t('contact'), link: '#contact' },
    { name: t('skills'), link: '#skills' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-sm h-16 shadow-lg transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(17,24,39,0.95)]' // Más oscuro al scrollear
          : 'bg-[rgba(26, 27, 31, 0.79)]' // Más transparente al inicio
      }`}
    >
      <div className="flex items-center justify-between h-full px-3 lg:px-10 max-w-15xl mx-auto">
        {/* Logo y nombre */}
        <a
          href="#home"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <img className="h-8" src={logo} alt="Logo" />
          <div className="flex flex-col">
            <h1 className="text-white text-sm font-bold">Stefani Guarino</h1>
            <h2 className="text-white text-xs">Full-Stack (MERN) & Mobile</h2>
          </div>
        </a>

        {/* Menú hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Menú de navegación */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static left-0 w-full lg:w-auto ${
            scrolled
              ? 'lg:bg-[rgba(17, 24, 39, 0)]'
              : 'lg:bg-[rgba(17, 24, 39, 0)]'
          } mt-16 lg:mt-0 transition-all duration-300 ease-in-out ${
            open
              ? 'top-0 opacity-100 bg-[rgba(17, 24, 39, 0)]'
              : 'top-[-490px] opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="border-b border-gray-700/50 lg:border-none"
            >
              <a
                href={link.link}
                className="block py-3 px-6 text-white hover:text-gray-300 lg:py-1 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Selector de idioma */}
          <li className="flex items-center gap-2 px-6 py-3 lg:py-0 lg:ml-6">
            <img src={world} alt="World" className="h-5" />
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={currentLang}
              className={`bg-transparent text-white border ${
                scrolled ? 'border-white/90' : 'border-white/50'
              } rounded px-2 py-1 text-sm focus:outline-none transition-colors`}
            >
              <option value="es" className="bg-[rgba(17,24,39,0.95)]">
                {t('languages.es')}
              </option>
              <option value="en" className="bg-[rgba(17,24,39,0.95)]">
                {t('languages.en')}
              </option>
              <option value="it" className="bg-[rgba(17,24,39,0.95)]">
                {t('languages.it')}
              </option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
