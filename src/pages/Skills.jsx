import { useTranslation } from "react-i18next";
import { Cards, Cards2 } from "../components/cards";

function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-col flex-wrap items-center bg-about-as bg-center bg-cover bg-no-repeat justify-center items-center p-[3%]">
        <div className="w-[100%] h-[10%] justify-center mt-[3%] mb-[3%]">
          <h1 className="text-white text-5xl text-center font-bold">
            {t("skillOne")}
          </h1>
        </div>
        <Cards />
      </div>
      <div className="min-h-screen flex flex-col flex-wrap  items-center p-[3%] bg-septenary w-[100%]">
        <div className="w-[100%] h-[100%] justify-center">
          <h1 className="text-white text-5xl text-center font-bold m-[3%]">
            {t("skillThree")}
          </h1>
        </div>
        <Cards2 />
      </div>
    </>
  );
}

export default Skills;
