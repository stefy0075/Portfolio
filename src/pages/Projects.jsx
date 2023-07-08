import { useTranslation } from "react-i18next";
import { FaGithub, FaGlobe } from "react-icons/fa";
import amazing from "../assets/amazing.jpg"
import petshop from "../assets/petshop.jpg"
import Minga from "../assets/Minga.png"
import './bg.css'

function Proyects() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-start css-about flex flex-col ">
        <h1 className="text-white m-[3%] text-3xl text-center font-bold">
          {t("proyectsOne")}
        </h1>
        <div className="w-[100%] gap-[3%] flex flex-row flex-wrap justify-center items-center">
          <div className="transform flex flex-col justify-center items-center hover:scale-105 w-[15rem] md:w-[20rem]">
            <div className="rounded-[1em] w-[15rem]  md:w-[20rem] css bg-primary m-[2%]">
              <img
                className="w-[15rem] md:w-[20rem] rounded-t-[1em]"
                src={petshop}
                alt="Petshop"
              />
              <div className="flex justify-center">
                <a href="https://github.com/stefy0075/PetShop-Patitas-Felices" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-3xl m-3 hover:text-gray-500" />
                </a>
                <a href="https://pet-patitas-felices.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="text-white text-3xl m-3 hover:text-gray-500 " />
                </a>
              </div>
            </div>
            <h2 className="text-white font-bold text-xl mt-[0.5em] text-center pb-[0.5%]">
              Patitas Felices
            </h2>
          </div>
          <div className="transform flex flex-col justify-center items-center hover:scale-105 w-[15rem] md:w-[20rem]">
            <div className="rounded-[1em] w-[15rem]  md:w-[20rem] css bg-primary m-[2%]">
              <img
                className="w-[15rem] md:w-[20rem] rounded-t-[1em]"
                src={amazing}
                alt="Petshop"
              />
              <div className="flex justify-center">
                <a href="https://github.com/stefy0075/Amazing-Events" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-3xl m-3 hover:text-gray-500" />
                </a>
                <a href="https://amazing-events-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="text-white text-3xl m-3 hover:text-gray-500 " />
                </a>
              </div>
            </div>
            <h2 className="text-white font-bold text-xl mt-[0.5em] text-center pb-[0.5%]">
              Amazing Events
            </h2>
          </div>
          <div className="transform flex flex-col justify-center items-center hover:scale-105 w-[15rem] md:w-[20rem]">
            <div className="rounded-[1em] w-[15rem]  md:w-[20rem] css bg-primary m-[2%]">
              <img
                className="w-[15rem] md:w-[20rem] rounded-t-[1em]"
                src={Minga}
                alt="Petshop"
              />
              <div className="flex justify-center">
                <a href="https://github.com/stefy0075/Minga-Web-Front" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-3xl m-3 hover:text-gray-500" />
                </a>
                <a href="https://minga-42.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="text-white text-3xl m-3 hover:text-gray-500 " />
                </a>
              </div>
            </div>
            <h2 className="text-white font-bold text-xl mt-[0.5em] text-center pb-[0.5%]">
              Minga
            </h2>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Proyects;
