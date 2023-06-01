import { useTranslation } from "react-i18next";

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-about-as bg-center bg-cover bg-no-repeat">
        <div className="w-[30%] h-[100%] 
         p-[3%]">
          <img
            className="h-[30%] rounded-[100%] border-8 border-quintary"
            src="../../src/assets/photo.png"
            alt="photo"
          />
          
        </div>
        <div className="w-[60%] h-[100%] pt-[3%] ">
          <h1 className="text-white text-4xl mb-[2rem] font-bold text-center">{t("aboutAs.titleAbout")}</h1>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.1")}</p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.2")}</p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.3")}</p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.4")}</p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.5")}</p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.6")}</p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">{t("aboutAs.sectionOne.7")}</p>
        </div>
      </div>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-decennial bg-center bg-cover bg-no-repeat border ">
      <div className="min-h-screen w-[60%] border "></div>
      <div className="min-h-screen w-[40%] border flex flex-col items-center justify-center gap-[1rem]">
      <img
            className="h-[12em] rounded-[0.5rem]"
            src="../../src/assets/title.two.png"
            alt="Logo"
          />
          <img
            className="h-[10em] rounded-[0.5rem] mt-[-6rem] mr-[-20em]"
            src="../../src/assets/title.five.png"
            alt="Logo"
          />
          <img
            className="h-[10em]  rounded-[0.5rem] mt-[-4rem] ml-[-5rem]"
            src="../../src/assets/title.three.png"
            alt="Logo"
          />
          <img
            className="h-[10em] rounded-[0.5rem] mt-[-4rem] mr-[-5rem]"
            src="../../src/assets/title.four.png"
            alt="Logo"
          />
          
        </div>

      </div>
    </>
  );
}

export default AboutAs;
