import { Link } from 'react-router-dom';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import whatsapp from '../assets/whatsapp.png';
import instagram from '../assets/instagram.png';
import logo from '../assets/Logo.ico';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const emailLink = 'mailto:dev.elianaguarino@gmail.com';

  return (
    <footer className="bg-tertiary text-white px-4 py-10 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo y contacto */}
        <div className="space-y-4">
          <div className="flex justify-center gap-2 md:justify-start">
            <img className="h-9 pl-1" src={logo} alt="Logo" />
            <div className="flex flex-col pl-2">
              <h1 className="text-white text-sm font-bold">Eliana Guarino</h1>
              <h2 className="text-white text-xs">Full-Stack (MERN) & Mobile</h2>
            </div>
          </div>
          <div className="text-sm flex flex-col items-center md:items-start">
            <p>
              <strong>Buenos Aires, Argentina</strong>
              <br />
              <span>{t('footer.tel')}</span> <strong>(+54) 11 51527077</strong>
              <br />
              <span>{t('footer.email')}</span>{' '}
              <strong>dev.elianaguarino@gmail.com</strong>
            </p>
          </div>
        </div>

        {/* Descripción */}
        <div className="text-sm leading-relaxed flex items-center justify-center md:justify-start">
          <p className="max-w-md">{t('footer.description')}</p>
        </div>

        {/* Redes sociales */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm font-semibold">
            {t('footer.networks', 'Mis redes')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="https://www.linkedin.com/in/stefani-guarino/"
              target="_blank"
            >
              <img
                className="h-[2rem] w-[2rem]"
                src={linkedin}
                alt="LinkedIn"
              />
            </Link>
            <Link to="https://github.com/stefy0075" target="_blank">
              <img className="h-[2rem] w-[2rem]" src={github} alt="GitHub" />
            </Link>
            <Link to="https://wa.link/iean78" target="_blank">
              <img
                className="h-[2rem] w-[2rem]"
                src={whatsapp}
                alt="WhatsApp"
              />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <img
                className="h-[2rem] w-[2rem]"
                src={instagram}
                alt="Instagram"
              />
            </Link>
            <Link to={emailLink} target="_blank">
              <img className="h-[2rem] w-[2rem]" src={email} alt="Email" />
            </Link>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} | Todos los derechos reservados |
        Desarrollado por Eliana Guarino
      </div>
    </footer>
  );
};

export default Footer;
