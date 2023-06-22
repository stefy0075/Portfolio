import { useTranslation } from "react-i18next";

function Proyects() {
  const { t } = useTranslation();
    return (
      <>
        <div className="min-h-screen flex flex-row flex-wrap justify-around items-baseline bg-about-as bg-center bg-cover bg-no-repeat ">
          <h1 className="text-white text-2xl">{t("proyectsOne")}</h1>
          
        </div>
        <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-quaternary">
          <h1 className="text-white text-2xl">{t("proyectsTwo")}</h1>
        </div>
      </>
    );
  }
  
  export default Proyects;
  