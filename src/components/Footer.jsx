import { Link } from "react-router-dom";
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import whatsapp from "../assets/whatsapp.png"
import instagram from "../assets/instagram.png"

const Footer = () => {
  const emailLink = `mailto:guarinoeliana@gmail.com`;

  return (
    <div className=" flex flex-col items-center justify-center bg-tertiary h-[5em] text-white">
      <div className=" flex flex-row items-center bg-tertiary  justify-center text-white w-[100%] h-[50%] flex flex-row gap-4 ">
          <Link
            to="https://www.linkedin.com/in/stefani-guarino/"
            target="_blank"
          >
            <img
              className="h-[2rem] w-[2rem]"
              src={linkedin}
              alt="LinkedIn"
            />
          </Link>

          <Link to="https://github.com/stefy0075" target="_blank">
            <img
              className="h-[2rem] w-[2rem]"
              src={github}
              alt="GitHub"
            />
          </Link>

          <Link to="https://wa.link/cnuwq7" target="_blank">
            <img
              className="h-[2rem] w-[2rem]"
              src={whatsapp}
              alt="WhatsApp"
            />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <img
              className="h-[2rem] w-[2rem]"
              src={instagram}
              alt="Instagram"
            />
          </Link>
          <Link to={emailLink} target="_blank">
            <img
              className="h-[2rem] w-[2rem]"
              src={email}
              alt="Email"
            />
          </Link>
      </div>
      <div className="flex items-center justify-center items-center h-[30%] w-[100%]">
        <p className="text-[9px]">
          Copyright © 2023 | All Rights Reserved | Powered by Eliana Guarino
        </p>
      </div>
    </div>
  );
};

export default Footer;
