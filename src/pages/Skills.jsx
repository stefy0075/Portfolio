import { useTranslation } from "react-i18next";
import {Cards, Cards1, Cards2} from '../components/cards'



function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-col flex-wrap items-center bg-home bg-center bg-cover bg-no-repeat justify-center items-center p-[3%]">
        <div className="w-[100%] h-[10%] justify-center mt-[3%] mb-[3%]">
          <h1 className="text-white text-[4em] text-center font-bold">
            {t("skillOne")}
          </h1>
        </div>
        <Cards/>
      </div>
      <div className="min-h-screen flex flex-col flex-wrap justify-center items-center p-[3%] bg-decennial">
        <div className="w-[100%] h-[10%] ">
          <h1 className="text-white text-[4em] text-center font-bold m-[3%]">
            {t("skillTwo")}
          </h1>
        </div>
        <Cards1/>
      </div>
      <div className="min-h-screen flex flex-col flex-wrap  items-center p-[3%] bg-septenary">
        <div className="w-[100%] h-[100%] justify-center">
          <h1 className="text-white text-[4em] text-center font-bold m-[3%]">
            {t("skillThree")}
          </h1>
        </div>
        <Cards2/>
      </div>
    </>
  );
}

export default Skills;
