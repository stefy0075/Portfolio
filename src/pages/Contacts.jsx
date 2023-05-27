import { useTranslation } from "react-i18next";



const ContactForm = () => {
    const { t } = useTranslation();
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
      
        // Aquí puedes acceder a los valores de los campos del formulario
        // y realizar cualquier lógica adicional que necesites, como enviar los datos a tu enlace de WhatsApp.
      
        // Por ejemplo, puedes acceder a los valores de los campos del formulario utilizando event.target
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
      
        // A continuación, puedes utilizar la información recopilada para generar el enlace de WhatsApp
        // y redirigir al usuario al enlace generado.
        // Esto puede requerir el uso de alguna biblioteca o método específico para generar el enlace de WhatsApp.
      
        // Por ejemplo, supongamos que tienes una función llamada generateWhatsAppLink() que recibe los datos del formulario
        // y genera el enlace de WhatsApp.
        const whatsappLink = generateWhatsAppLink(name, email, message);
        window.location.href = whatsappLink;
      };


  return (
    <div className="bg-contact min-h-screen flex flex-row justify-around items-center bg-center bg-cover bg-no-repeat ">
      <div className="w-[50%] h-[100vh] flex flex-col items-center justify-center  p-[5%]">
        <h1 className="text-white font-bold text-4xl text-center m-[1.5rem] pb-[1.5rem]">{t('contactH1')} </h1>
        <p className="text-white text-2xl mt-[2.5rem] mb-[2.5rem] tracking-wider text-justify">
        {t('contactDescription')}
        </p>
      </div>
      <div className="w-[50%] h-[100%]">
        <form className="max-w-lg mx-auto mt-8 p-4 bg-nonary rounded-lg shadow-md">
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
              className="w-full px-3 py-2 rounded  bg-quintary"
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
              className="w-full px-3 py-2 border border-gray-300 rounded bg-quintary"
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
              className="w-full px-3 py-2 border border-gray-300 rounded bg-quintary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-octary hover:bg-quintary text-white font-medium py-2 px-4 rounded"
          >
            {t('contactForm.button')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
