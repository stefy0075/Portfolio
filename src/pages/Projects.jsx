import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { CheckIcon } from '@heroicons/react/24/solid';
import amazing from '../assets/amazing.jpg';
import petshop from '../assets/petshop.jpg';
import Minga from '../assets/Minga.png';
import Odissey from '../assets/Odissey.jpg';
import ctaBackground from '../assets/ctaSection.avif';
import Calculadora from '../assets/calculadora.jpg';
import bgHero from '../assets/heroProject.png';

function Projects() {
  const { t } = useTranslation();

  const proyectos = [
    {
      nombre: 'Patitas Felices',
      imagen: petshop,
      github: 'https://github.com/stefy0075/PetShop-Patitas-Felices',
      web: 'https://pet-patitas-felices.vercel.app/',
      descripcion: t('proyectos.patitasDescripcion'),
    },
    {
      nombre: 'Amazing Events',
      imagen: amazing,
      github: 'https://github.com/stefy0075/Amazing-Events',
      web: 'https://amazing-events-nu.vercel.app/',
      descripcion: t('proyectos.amazingDescripcion'),
    },
    {
      nombre: 'Minga',
      imagen: Minga,
      github: 'https://github.com/stefy0075/Minga-Web-Front',
      web: 'https://minga-42.vercel.app/',
      descripcion: t('proyectos.mingaDescripcion'),
    },
    {
      nombre: 'Odissey Travel',
      imagen: Odissey,
      github: 'https://github.com/stefy0075/Odissey-1.2-front',
      web: 'https://odisseytravel.vercel.app/',
      descripcion: t('proyectos.odisseyDescripcion'),
    },
    {
      nombre: 'Calculadora',
      imagen: Calculadora,
      github: 'https://github.com/stefy0075/calculadora-basica',
      web: 'https://calculadora0075.vercel.app/',
      descripcion: t('proyectos.calculadoraDescripcion'),
    },
  ];

  const habilidadesTecnicas = t('habilidades.listaTecnicas', {
    returnObjects: true,
  });
  const habilidadesGestion = t('habilidades.listaGestion', {
    returnObjects: true,
  });

  return (
    <main className="min-h-[100vh] w-full overflow-x-hidden bg-secondary">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgHero})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
          className="z-20 text-center px-4"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {t('proyectos.heroTitle')}
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-white text-lg md:text-2xl mb-6">
            {t('proyectos.heroSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* Sección de Proyectos */}
      <section className="w-full py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('proyectos.titulo')}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('proyectos.subtitulo')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {proyecto.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>

                  <div className="flex justify-center space-x-6">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={proyecto.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Sitio web"
                    >
                      <FaGlobe className="text-2xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('habilidades.titulo')}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('habilidades.subtitulo')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Habilidades Técnicas */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {t('habilidades.tecnico')}
              </h3>
              <ul className="space-y-4">
                {habilidadesTecnicas.map((habilidad, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <span className="text-gray-700">{habilidad}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Habilidades de Gestión */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {t('habilidades.gestion')}
              </h3>
              <ul className="space-y-4">
                {habilidadesGestion.map((habilidad, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <span className="text-gray-700">{habilidad}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative w-full py-24 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ctaBackground})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('proyectos.ctaTitle')}
          </h2>
          <p className="text-xl text-white mb-8">
            {t('proyectos.ctaSubtitle')}
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-secondary transition"
          >
            {t('proyectos.ctaButton')}
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

export default Projects;
