import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary nav">
      <Link to="/">{t('home')}</Link>
      <Link to="/">{t('about')}</Link>
      <Link to="/">{t('projects')}</Link>
      <Link to="/">{t('contact')}</Link>
      <Link to="/">{t('skills')}</Link>
    </div>
  );
};

export default Navbar
 
