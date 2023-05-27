import { Link } from "react-router-dom";

const Footer = () => {
  const emailLink = `mailto:guarinoeliana@gmail.com`;

  return (
    <div className=" flex flex-col items-center justify-center bg-tertiary h-[22%] text-white">
      <div className=" flex flex-row items-center bg-tertiary  justify-between text-white  pt-[1rem] w-[100%] h-[50%] ">
        <div>
          <div className="m-[1rem] flex flex-row items-center gap-2 ">
            <img
              className="h-[3rem] logo-e"
              src="../../src/assets/Logo.ico"
              alt="Logo"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-[1rem] cssh1 font-bold text-center">
                Eliana Guarino
              </h1>
              <h2 className="text-white text-xs ">Developer Full-Stack MERN</h2>
              <h2 className="text-white text-xs text-center">& Mobile</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mr-[2rem]">
          <Link
            to="https://www.linkedin.com/in/stefani-guarino/"
            target="_blank"
          >
            <img
              className="h-[3rem] w-[3rem]"
              src="../../src/assets/linkedin.png"
              alt="LinkedIn"
            />
          </Link>

          <Link to="https://github.com/stefy0075" target="_blank">
            <img
              className="h-[3rem] w-[3rem]"
              src="../../src/assets/github.png"
              alt="GitHub"
            />
          </Link>

          <Link to="https://wa.link/cnuwq7" target="_blank">
            <img
              className="h-[3rem] w-[3rem]"
              src="../../src/assets/whatsapp.png"
              alt="WhatsApp"
            />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <img
              className="h-[3rem] w-[3rem]"
              src="../../src/assets/instagram.png"
              alt="Instagram"
            />
          </Link>
          <Link to={emailLink} target="_blank">
            <img
              className="h-[3rem] w-[3rem]"
              src="../../src/assets/email.png"
              alt="Email"
            />
          </Link>
        </div>
      </div>
      <div className=" flex items-center justify-center h-[50%] w-[100%]">
        <p>
          Copyright © 2023 | All Rights Reserved | Powered by Eliana Guarino
        </p>
      </div>
    </div>
  );
};

export default Footer;
