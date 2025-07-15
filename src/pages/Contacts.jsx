import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import bgHero from '../assets/heroContact.png';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  // Estado para loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            user_phone: form.current.user_phone.value,
            prefers_whatsapp: form.current.prefers_whatsapp.checked,
            message: form.current.message.value,
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      form.current.reset();
      setIsSubmitted(true); // Activa el estado de envío exitoso
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Error al enviar el mensaje';

      if (error.name === 'AbortError') {
        errorMessage = 'La solicitud tardó demasiado. Intenta nuevamente.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Problema de conexión. Verifica tu internet.';
      }

      alert(`✗ ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = ({ onNewMessage }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        ¡Mensaje enviado con éxito!
      </h3>
      <div className="text-gray-600 space-y-2">
        <p>Gracias por contactarte conmigo.</p>
        <p>A la brevedad estaré comunicándome contigo.</p>
        <p>¡Gracias por tu paciencia!</p>
      </div>
      <button
        onClick={onNewMessage}
        className="mt-6 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Enviar otro mensaje
      </button>
    </div>
  );
  SuccessMessage.propTypes = {
    onNewMessage: PropTypes.func.isRequired,
  };

  // Lógica para enviar el formulario
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con imagen de fondo */}
      <header
        className="relative h-[500px] flex items-center justify-center bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgHero})`,
        }}
      >
        <div className="text-center z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contactH1')}
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>
      </header>

      {/* Sección principal de contenido */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Información de contacto */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t('contactInfo.addressTitle')}
                </h3>
                <p className="text-gray-600">{t('contactInfo.address')}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t('contactInfo.phoneTitle')}
                </h3>
                <p className="text-gray-600">{t('contactInfo.phone')}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t('contactInfo.emailTitle')}
                </h3>
                <p className="text-gray-600">
                  <a
                    href={`mailto:${t('contactInfo.email')}`}
                    className="text-primary hover:underline"
                  >
                    {t('contactInfo.email')}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('contactForm.title')}
            </h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-gray-600 mb-8">{t('contactForm.subtitle')}</p>

            {isSubmitted ? (
              <SuccessMessage onNewMessage={() => setIsSubmitted(false)} />
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
                disabled={isSubmitting}
              >
                {/* Campo Nombre (obligatorio) */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    {t('contactForm.name')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    required
                    minLength={2}
                    pattern="[A-Za-zÁ-ú\s]+"
                    title="Solo se permiten letras y espacios (mayúsculas o minúsculas)"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                {/* Campo Email (obligatorio) */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    {t('contactForm.email')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="ejemplo@ejemplo.com"
                  />
                </div>

                {/* Campo Teléfono/WhatsApp (obligatorio) */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Teléfono/WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    required
                    pattern="[0-9]{9,15}"
                    title="Por favor ingresa un número válido (9-15 dígitos)"
                    placeholder="Incluye código de país"
                  />
                </div>

                {/* Campo WhatsApp (opcional) */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    name="prefers_whatsapp"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="whatsapp"
                    className="ml-2 block text-gray-700"
                  >
                    Prefiero contacto por WhatsApp
                  </label>
                </div>

                {/* Campo Mensaje (obligatorio) */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    {t('contactForm.message')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                    required
                    minLength={10}
                    placeholder="Describe tu proyecto o consulta"
                  ></textarea>
                </div>

                <p className="text-sm text-gray-500 ">
                  <span className="text-red-500">*</span> Campos obligatorios
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-white font-medium py-3 px-4 rounded-lg mt-2 transition-all ${
                    isSubmitting
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:bg-primary-dark hover:shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    t('contactForm.button')
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
