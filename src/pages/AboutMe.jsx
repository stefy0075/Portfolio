import { useTranslation } from "react-i18next";
import photo2 from "../assets/photo2.jpg";
import "./bg.css";

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex lg:flex-row flex-col flex-wrap justify-around items-center css-about">
        <div className="lg:w-[30%] w-[100%] h-[100%]">
          <div className="lg:h-[100%] h-[40%] lg:mx-[0%] lg:mt-[0%] mx-[20%] mt-[10%] p-[4%] rounded-[50%] border-t-4 border-l-4 md:border-t-8 md:border-l-8 border-black">
            <div className="lg:h-[100%] h-[35%] p-[4%] rounded-[50%] md:border-t-8 border-t-4 border-r-4 md:border-r-8 border-nonary">
              <img
                className="lg:h-[60%] h-[20%] rounded-[50%] border-4 md:border-8 lg:border-8 border-black"
                src={photo2}
                alt="photo"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] w-[100%] flex flex-col justify-center items-center h-[100%] pt-[3%]">
          <h1 className="text-black w-[90%] text-xl lg:text-3xl mb-[2rem] font-bold text-center">
            {t("aboutAs.sectionThree.1")}
          </h1>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t("aboutAs.sectionThree.2")}
          </p>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t("aboutAs.sectionThree.3")}
          </p>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t("aboutAs.sectionThree.4")}
          </p>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t("aboutAs.sectionThree.5")}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
