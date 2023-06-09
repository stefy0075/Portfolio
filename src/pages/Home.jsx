import GraficComputer from "../components/grafic-computer";
import { useTranslation } from "react-i18next";
import Grafic2 from "../components/grafic2";

function App() {
  const { t } = useTranslation();
  const solutions = t("solutions", { returnObjects: true });
  return (
    <>
      <div className="min-h-[100vw]">
        <div className="h-screen bg-quaternary flex flex-row flex-wrap  bg-home bg-center bg-cover bg-no-repeat ">
          <div className="h-[100%] w-[50%] flex flex-col pt-[3%]">
            <h1 className="text-white font-bold text-5xl text-center m-[1em]">
              {t("titleHome")}
            </h1>
            <h2 className="text-white  text-2xl ml-[3rem] mr-[2rem] leading-9 text-justify tracking-wide ">
              {t("presentation")}
            </h2>
          </div>
          <div className="h-[100%] w-[50%] flex justify-around items-center">
            <GraficComputer />
          </div>
        </div>
        <div className="h-screen flex flex-col bg-quaternary flex-wrap ">
          <div className="flex flex-row bg-quaternary">
            <div className="w-[45%] pt-[3%] pl-[3%] flex items-center">
              <Grafic2 />
            </div>
            <div className="w-[55%] min-h-screen p-[1%] pr-[3%]">
              <h2 className="text-white font-bold text-4xl text-center m-[1.5rem] pb-[1.5rem]">
                {t("subtitleHome")}
              </h2>
              <p className="text-white text-2xl mt-[2.5rem] mb-[2.5rem]">
                {t("descriptionHome")}
              </p>
              <ul className="list-disc text-white text-2xl">
                {solutions.map((item, index) => (
                  <li key={index} className="pl-4 mb-[0.7rem]">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white text-2xl mt-[2.5rem] mb-[2.5em]">
                {t("descriptionHomeFinal")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
