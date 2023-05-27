import { useTranslation } from "react-i18next";


const ContactForm = () => {
    const { t } = useTranslation();

  return (
    <div className="bg-contact min-h-screen flex flex-row justify-around items-center bg-center bg-cover bg-no-repeat ">
      <div className="w-[50%] h-[100vh] flex flex-col items-center justify-center  p-[5%]">
        <h1 className="text-white font-bold text-4xl text-center m-[1.5rem] pb-[1.5rem]">{t('contactH1')} </h1>
        <p className="text-white text-2xl mt-[2.5rem] mb-[2.5rem] tracking-wider text-justify">
        {t('contactDescription')}
        </p>
      </div>
      <div className="w-[50%] h-[100%]">
        <form className="max-w-lg mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
          {t('contactForm.title')}
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              {t('contactForm.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              {t('contactForm.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              {t('contactForm.mesaje')}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            {t('contactForm.button')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
