import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import './bg.css';
import Grafic2 from '../components/grafic2';
import bgHero from '../assets/bgHero.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import ctaFinal from '../assets/ctafinal.jpg';

function Home() {
  const { t } = useTranslation();
  const solutions = t('solutions.solutionsTips', { returnObjects: true });

  return (
    <main className="min-h-[100vh] w-full overflow-x-hidden ">
      {/* HERO personalizado */}
      <section
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
          className="z-20 text-center px-4 mt-20"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6 pb-12">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="projects"
              className="bg-primary text-white px-5 py-2 rounded hover:bg-opacity-80 transition"
            >
              {t('hero.projects')}
            </a>
            <a
              href="contact"
              className="border border-white text-white px-4 py-2 rounded hover:bg-secondary hover:text-black transition"
            >
              {t('hero.contact')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="absolute bottom-8 z-20 "
        >
          <span className="text-white text-3xl animate-bounce">↓</span>
        </motion.div>
      </section>

      {/* Bienvenida */}
      <section className="w-full bg-secondary py-24 px-6 text-center">
        <h3 className="text-lg font-semibold text-primary uppercase tracking-widest mb-4">
          {t('welcome.title')}
        </h3>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          {t('welcome.subtitle')}
        </h1>

        <div className="flex justify-center mb-6">
          <span className="w-16 h-1 bg-accent block" />
        </div>

        <h5 className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
          {t('welcome.description')}
        </h5>

        <div>
          <a
            href="about"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold transition duration-300 hover:text-black hover:bg-secondary"
          >
            {t('welcome.cta')}
          </a>
        </div>
      </section>

      {/* Sección Banner */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[img1, img2, img3, img4].map((image, i) => {
          const keys = ['web', 'design', 'performance', 'support'];
          const key = keys[i];
          return (
            <div
              key={i}
              className="relative h-[350px] bg-cover bg-center text-white flex items-center justify-center text-2xl font-bold"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <h2 className="relative z-10 text-center px-4">
                {t(`bannerServices.${key}.title`)}
              </h2>
            </div>
          );
        })}
      </section>

      {/* Sección de Soluciones - Estilo Moderno */}
      <section className="w-full min-h-screen bg-secondary py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('solutions.title')}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Grafic2 className="w-full h-auto max-w-lg mx-auto" />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {solution.split(':')[0]}
                      </h3>
                      <p className="text-gray-600">
                        {solution.split(':')[1] || solution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <p className="text-lg text-gray-700 mb-8">
                  {t('solutions.closing')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 text-white"
        style={{ backgroundImage: `url(${ctaFinal})` }}
        id="ctaFinal"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t('ctaFinal.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-10"
          >
            {t('ctaFinal.subtitle')}
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary hover:text-black transition"
          >
            {t('ctaFinal.button')}
          </motion.a>
        </div>
      </section>
    </main>
  );
}

export default Home;
