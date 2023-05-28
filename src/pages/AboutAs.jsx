import { useTranslation } from "react-i18next";

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex flex-row flex-wrap justify-around items-center bg-about-as bg-center bg-cover bg-no-repeat border ">
        <div className="w-[40%] h-[100%] border p-[3%]">
          <img
            className="h-[40%] rounded-[100%] border-8 border-quintary"
            src="../../src/assets/photo.png"
            alt="photo"
          />
          
        </div>
        <div className="w-[60%] h-[100%] border">
          <h1 className="text-white text-2xl">{t("titleAbout")}</h1>
          <p className="text-white text-2xl">{t("aboutAs")}</p>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
