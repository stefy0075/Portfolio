import { useTranslation } from "react-i18next";
import Grafic2 from "../components/grafic2";
import computer from "../assets/computer.svg";
import "./bg.css";

function App() {
  const { t } = useTranslation();
  const solutions = t("solutions", { returnObjects: true });
  return (
    <>
      <div className="min-h-[100vw]">
        <div className="min-h-screen flex lg:flex-row-reverse flex-col css-about justify-center items-center">
          <div className="h-[100%] w-[100%]  lg:w-[50%] lg:my-[7%] my-[3%] flex justify-center items-center">
            <img
              className="lg:h-[90%] pt-[2rem] lg:pt-[0rem] h-[50%] w-[50%]"
              src={computer}
              alt="Computer"
            />
          </div>
          <div className="h-[100%] w-[100%] lg:w-[50%] my-[3%] lg:my-[0%] flex flex-col pt-[3%]">
            <h1 className="text-white font-bold text-xl lg:text-3xl text-center mb-[0.5em]">
              {t("titleHome")}
            </h1>
            <h2 className="text-white text-sm lg:text-lg mr-[1rem] ml-[2rem] lg:leading-7 leading-5 lg:text-justify tracking-wide ">
              {t("presentation")}
            </h2>
          </div>
        </div>
        <div className="min-h-screen flex lg:flex-row flex-col bg-quaternary flex-wrap items-center justify-center ">
          <div className="w-[100%] lg:w-[45%] pt-[3%] lg:pl-[3%] pl-[5%] flex items-center justify-center">
            <Grafic2 />
          </div>
          <div className="w-[90%] flex flex-col justify-center items-center lg:w-[55%] pl-[1.5rem] lg:pl-[0rem] p-[1%] lg:pr-[3%]">
            <h2 className="text-white font-bold text-xl lg:text-3xl text-center m-1 lg:m-[1.5rem] pb-[1.5rem]">
              {t("subtitleHome")}
            </h2>
            <p className="text-white text-sm lg:text-lg mb-[2rem]">
              {t("descriptionHome")}
            </p>
            <ul className="list-disc text-white text-sm lg:text-lg">
              {solutions.map((item, index) => (
                <li key={index} className="pl-4 mb-[0.7rem]">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white text-sm lg:text-lg mt-[2.5rem] mb-[2.5em]">
              {t("descriptionHomeFinal")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
