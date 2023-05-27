import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useRef } from "react";
import config from "../../config";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        form.current,
        config.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-contacts min-h-screen flex flex-col flex-wrap md:flex-row justify-around items-center bg-center bg-cover bg-no-repeat">
      <div className="md:w-1/2 h-full flex flex-col items-center justify-center p-8">
        <h1 className="text-white font-bold text-4xl text-center my-6">
          {t("contactH1")}
        </h1>
        <p className="text-white text-2xl my-6 tracking-wider text-justify">
          {t("contactDescription")}
        </p>
      </div>
      <div className="md:w-1/2 h-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto mt-8 p-4 bg-nonary rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">
            {t("contactForm.title")}
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              {t("contactForm.name")}
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-3 py-2 rounded bg-quintary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              {t("contactForm.email")}
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-quintary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              {t("contactForm.mesaje")}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-quintary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-octary hover:bg-quintary text-white font-medium py-2 px-4 rounded"
          >
            {t("contactForm.button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
