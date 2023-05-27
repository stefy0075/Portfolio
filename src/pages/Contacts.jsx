import { useTranslation } from "react-i18next";


const ContactForm = () => {
    const { t } = useTranslation();

  return (
    <div className="bg-contact min-h-screen flex flex-row justify-around items-center bg-center bg-cover bg-no-repeat ">
      <div className="w-[50%] h-[100%]">
        <h1>{t('contactH1')} </h1>
        <p>
        {t('contactDescription')}
        </p>
      </div>
      <div className="w-[50%] h-[100%]">
        <form className="max-w-lg mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Formulario de Contacto
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Nombre
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
              Email
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
              Mensaje
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
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
