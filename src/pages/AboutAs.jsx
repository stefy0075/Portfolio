import { useTranslation } from "react-i18next";

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-about-as bg-center bg-cover bg-no-repeat border ">
        <div className="w-[30%] h-[100%] border p-[3%]">
          <img
            className="h-[30%] rounded-[100%] border-8 border-quintary"
            src="../../src/assets/photo.png"
            alt="photo"
          />
          
        </div>
        <div className="w-[60%] h-[100%] pt-[3%] border">
          <h1 className="text-white text-4xl mb-[2rem] font-bold text-center">{t("aboutAs.titleAbout")}</h1>
          <p className="text-white m-[1rem] text-2xl">{t("aboutAs.sectionOne.1")}</p>
          <p className="text-white m-[1rem] text-2xl">{t("aboutAs.sectionOne.2")}</p>
          <p className="text-white m-[1rem] text-2xl">{t("aboutAs.sectionOne.3")}</p>
          <p className="text-white m-[1rem] text-2xl">{t("aboutAs.sectionOne.4")}</p>
          <p className="text-white m-[1rem] text-2xl">{t("aboutAs.sectionOne.5")}</p>
          <p className="text-white m-[1rem] text-2xl">{t("aboutAs.sectionOne.6")}</p>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
