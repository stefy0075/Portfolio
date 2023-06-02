import { useTranslation } from "react-i18next";
import Grafic3 from "../components/grafic3";

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-about-as bg-center bg-cover bg-no-repeat">
        <div
          className="w-[30%] h-[100%] 
         p-[3%]"
        >
          <img
            className="h-[30%] rounded-[100%] border-8 border-quintary"
            src="../../src/assets/photo.png"
            alt="photo"
          />
        </div>
        <div className="w-[60%] h-[100%] pt-[3%] ">
          <h1 className="text-white text-4xl mb-[3rem] font-bold text-center">
            {t("aboutAs.titleAbout")}
          </h1>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">
            {t("aboutAs.sectionOne.1")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">
            {t("aboutAs.sectionOne.2")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">
            {t("aboutAs.sectionOne.3")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">
            {t("aboutAs.sectionOne.4")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">
            {t("aboutAs.sectionOne.5")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] text-2xl">
            {t("aboutAs.sectionOne.6")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionOne.7")}
          </p>
        </div>
      </div>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-decennial pl-[2rem] ">
        <div className="min-h-screen w-[60%]">
          <h1 className="text-white w-[90%] text-4xl mt-[4rem] mb-[3rem] font-bold text-center">
            {t("aboutAs.sectionTwo.1")}
          </h1>
          <p className="text-white pl-[1rem] m-[1rem] font-bold text-2xl">
            {t("aboutAs.sectionTwo.2")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionTwo.3")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] font-bold text-2xl">
            {t("aboutAs.sectionTwo.4")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionTwo.5")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] font-bold text-2xl">
            {t("aboutAs.sectionTwo.6")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionTwo.7")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] font-bold text-2xl">
            {t("aboutAs.sectionTwo.8")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[3rem] mb-[3rem] text-2xl">
            {t("aboutAs.sectionTwo.9")}
          </p>
        </div>
        <div className="min-h-screen w-[40%] flex flex-col items-center justify-center gap-[1rem]">
          <img
            className="h-[18em] shadow-2xl border-black border-[0.5rem] rounded-[0.5rem] mr-[-10em]"
            src="../../src/assets/title.five.png"
            alt="Logo"
          />
          <img
            className="h-[12em] shadow-2xl border-black border-[0.5rem] mt-[-7em] rounded-[0.5rem]"
            src="../../src/assets/title.two.png"
            alt="Logo"
          />
          <img
            className="h-[10em] shadow-2xl border-black border-[0.5rem]   rounded-[0.5rem] mt-[-5em] ml-[-8rem]"
            src="../../src/assets/title.three.png"
            alt="Logo"
          />
          <img
            className="h-[10em] shadow-2xl border-black border-[0.5rem]  rounded-[0.5rem] mt-[-4rem] mr-[-5rem]"
            src="../../src/assets/title.four.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-septenary border">
        <div className="w-[30%] h-[100%] border p-[3%]">
          <Grafic3 />
        </div>
        <div className="w-[70%] h-[100%] border p-[3%]">
          <h1 className="text-white w-[90%] text-4xl mt-[4rem] mb-[3rem] font-bold text-center">
            {t("aboutAs.sectionThree.1")}
          </h1>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionThree.2")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionThree.3")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem] mb-[2rem] text-2xl">
            {t("aboutAs.sectionThree.4")}
          </p>
          <p className="text-white pl-[1rem] m-[1rem]  mb-[2rem] text-2xl">
            {t("aboutAs.sectionThree.5")}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
