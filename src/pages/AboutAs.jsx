import { useTranslation } from "react-i18next";
import Grafic3 from "../components/grafic3";
import photo2 from "../assets/photo2.jpg"
import './bg.css'

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center css-about">
        <div
          className="w-[30%] h-[100%]"
        >
          <div className="h-[100%] p-[4%] rounded-[50%] border-t-8 border-l-8 border-black">
          <div className="h-[100%] p-[4%] rounded-[50%] border-t-8 border-r-8 border-nonary">
          <img
            className="h-[60%] rounded-[50%] border-8 border-black"
            src={photo2}
            alt="photo"
          />
          </div>
          </div>
        </div>
        <div className="w-[60%] h-[100%] pt-[3%] ">
          <h1 className="text-white text-3xl mb-[2rem] font-bold text-center">
            {t("aboutAs.titleAbout")}
          </h1>
          <p className="text-white pl-[1rem] m-[0.5rem] text-lg">
            {t("aboutAs.sectionOne.1")}
          </p>
          <p className="text-white pl-[1rem] m-[0.5rem] text-lg">
            {t("aboutAs.sectionOne.2")}
          </p>
          <p className="text-white pl-[1rem] m-[0.5rem] text-lg">
            {t("aboutAs.sectionOne.3")}
          </p>
          <p className="text-white pl-[1rem] m-[0.5rem] text-lg">
            {t("aboutAs.sectionOne.4")}
          </p>
          <p className="text-white pl-[1rem] m-[0.5rem] text-lg">
            {t("aboutAs.sectionOne.5")}
          </p>
          <p className="text-white pl-[1rem] m-[0.5rem] text-lg">
            {t("aboutAs.sectionOne.6")}
          </p>
          <p className="text-white pl-[1rem] m-[0.5rem] mb-[2rem] text-lg">
            {t("aboutAs.sectionOne.7")}
          </p>
        </div>
      </div>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-septenary">
        <div className="w-[40%] h-[100%]">
          <Grafic3 />
        </div>
        <div className="w-[60%] h-[100%] pr-[3%] pt-[3%]">
          <h1 className="text-white w-[90%] text-3xl mb-[2rem] font-bold text-center">
            {t("aboutAs.sectionThree.1")}
          </h1>
          <p className="text-white m-[1rem] mb-[1rem] text-lg">
            {t("aboutAs.sectionThree.2")}
          </p>
          <p className="text-white m-[1rem] mb-[1rem] text-lg">
            {t("aboutAs.sectionThree.3")}
          </p>
          <p className="text-white m-[1rem] mb-[1rem] text-lg">
            {t("aboutAs.sectionThree.4")}
          </p>
          <p className="text-white m-[1rem] mb-[1rem] text-lg">
            {t("aboutAs.sectionThree.5")}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
