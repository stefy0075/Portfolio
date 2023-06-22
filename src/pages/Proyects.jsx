import { useTranslation } from "react-i18next";

function Proyects() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-baseline bg-about-as bg-center bg-cover bg-no-repeat flex flex-col ">
        <h1 className="text-white mt-[3%] border text-5xl text-center font-bold">
          {t("proyectsOne")}
        </h1>
        <div className="border w-[100%] ">

        </div>
      </div>
      <div className="min-h-screen flex flex-row flex-wrap justify-around bg-quaternary">
        <h1 className="text-white mt-[3%] text-5xl text-center font-bold">
          {t("proyectsTwo")}
        </h1>
      </div>
    </>
  );
}

export default Proyects;
