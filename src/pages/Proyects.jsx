import { useTranslation } from "react-i18next";

function Proyects() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-start bg-about-as bg-center bg-cover bg-no-repeat flex flex-col ">
        <h1 className="text-white m-[5%] border text-3xl text-center font-bold">
          {t("proyectsOne")}
        </h1>
        <div className="border w-[100%] flex flex-row flex-wrap justify-center items-center">
        <div className="rounded-[1em] w-[15rem] transform hover:scale-105 css bg-primary m-[2%]">
          <img
            className="w-[15rem] rounded-t-[1em]"
            src="../../src/assets/petshop.jpg"
            alt="Petshop"
          />
          <h2 className="text-white text-xl mt-[0.5em] text-center pb-[0.5%]">Patitas Felices</h2>
        </div>

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
