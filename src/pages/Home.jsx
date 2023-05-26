import GraficComputer from "../components/grafic-computer";
import { useTranslation } from "react-i18next";
import Grafic2 from "../components/grafic2";

function App() {
  const { t } = useTranslation();
  const solutions = t("solutions", { returnObjects: true });
  return (
    <>
      <div className="min-h-[100vw]">
        <div className="min-h-screen bg-quaternary flex flex-row justify-around items-center bg-home bg-center bg-cover bg-no-repeat ">
          <div className="text-black h-[100%] w-[50%]  flex flex-col justify-around items-center ">
            <h1 className="text-white font-bold text-5xl text-center m-[2rem]">
              {t("titleHome")}{" "}
            </h1>
            <h2 className="text-white  text-2xl ml-[3rem] mr-[2rem] leading-9 text-justify tracking-wide ">
              {t("presentation")}
            </h2>
          </div>
          <div className="h-[100%] w-[50%] flex justify-around items-center">
            <GraficComputer />
          </div>
        </div>
        <div className="min-h-[100vw] flex flex-row bg-quaternary ">
          <div className="w-[40%] h-[100vh] mt-[5%] pt-[5%] pl-[3%] pr-[3%] pb-[3%] flex items-center">
            <Grafic2 />
          </div>
          <div className="w-[60%] h-[100vh] p-[3%]">
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
            <p className="text-white text-2xl mt-[2.5rem] mb-[2.5rem]">
              {t("descriptionHomeFinal")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
