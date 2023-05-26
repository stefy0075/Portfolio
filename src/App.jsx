import "./App.css";
import GraficComputer from "./components/grafic-computer";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen bg-quaternary flex flex-row justify-around items-center bg-home bg-center bg-cover bg-no-repeat ">
        <div className="text-black h-[100%] w-[50%]  flex flex-col justify-around items-center ">
          <h1 className="text-white font-bold text-5xl text-center m-[2rem]">{t("titleHome")} </h1>
          <h2 className="text-white  text-2xl ml-[3rem] mr-[2rem] leading-9 text-justify tracking-wide ">
            {t("presentation")}
          </h2>
        </div>
        <div className="h-[100%] w-[50%] flex justify-around items-center">
          <GraficComputer />
        </div>
      </div>
    </>
  );
}

export default App;
