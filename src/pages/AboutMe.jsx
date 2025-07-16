import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import photo from '../assets/photo.jpg';
import bgHero from '../assets/heroAbout.jpeg';

function AboutAs() {
  const { t } = useTranslation();

  // Datos para las secciones de pilares/fortalezas
  const strengths = [
    {
      title: t('aboutAs.strengths.tech.title'),
      description: t('aboutAs.strengths.tech.description'),
    },
    {
      title: t('aboutAs.strengths.ux.title'),
      description: t('aboutAs.strengths.ux.description'),
    },
    {
      title: t('aboutAs.strengths.performance.title'),
      description: t('aboutAs.strengths.performance.description'),
    },
    {
      title: t('aboutAs.strengths.communication.title'),
      description: t('aboutAs.strengths.communication.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con imagen de fondo */}
      <header
        className="fancy-header relative h-[500px] flex items-center justify-center bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgHero})`,
        }}
      >
        <div className="text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('aboutAs.title')}
          </motion.h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('aboutAs.subtitle')}
          </p>
        </div>
      </header>

      {/* Sección principal de contenido */}
      <div className="h-full w-full mx-auto px-2 py-16 bg-gray-50">
        {/* Sección de introducción */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Contenedor de imagen */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-gradient-to-br p-1 from-gray-50 to-gray-100  h-full flex items-center">
                <img
                  src={photo}
                  alt="Eliana - Full Stack Developer"
                  className="w-[245px] md:w-[295px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Texto descriptivo */}
            <div className="lg:w-[60%] backdrop-blur-sm rounded-xl p-6 flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('aboutAs.sectionThree.1')}
              </h2>
              <div className="space-y-6 text-gray-600">
                {[2, 3, 4, 5].map((item) => (
                  <p key={item}>{t(`aboutAs.sectionThree.${item}`)}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sección de pilares/fortalezas */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('aboutAs.strengthsTitle')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutAs.strengthsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {strength.title}
              </h3>
              <p className="text-gray-600">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t('aboutAs.ctaTitle')}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          {t('aboutAs.ctaDescription')}
        </p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all"
        >
          {t('aboutAs.ctaButton')}
        </motion.a>
      </section>
    </div>
  );
}

export default AboutAs;
