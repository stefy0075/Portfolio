import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import photo2 from '../assets/photo2.jpg';
import './bg.css';

function AboutAs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen flex lg:flex-row flex-col flex-wrap justify-around items-center css-about">
        {/* Sección Presentación - Estilo Hero */}
        <section className="w-full min-h-screen bg-gradient-to-br from-primary/10 to-secondary flex flex-col items-center justify-center px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              {t('heroSection.name')}
            </h1>

            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>

            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              {t('heroSection.role')}
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              <Trans
                i18nKey="heroSection.presentation"
                components={[
                  <strong key="0" />,
                  <strong key="1" />,
                  <strong key="2" />,
                  <strong key="3" />,
                ]}
              />
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
              >
                {t('heroSection.projectsButton')}
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
              >
                {t('heroSection.contactButton')}
              </Link>
            </div>
          </motion.div>
        </section>
        <div className="lg:w-[30%] w-[100%] h-[100%]">
          <div className="lg:h-[100%] h-[40%] lg:mx-[0%] lg:mt-[0%] mx-[20%] mt-[10%] p-[4%] rounded-[50%] border-t-4 border-l-4 md:border-t-8 md:border-l-8 border-black">
            <div className="lg:h-[100%] h-[35%] p-[4%] rounded-[50%] md:border-t-8 border-t-4 border-r-4 md:border-r-8 border-nonary">
              <img
                className="lg:h-[60%] h-[20%] rounded-[50%] border-4 md:border-8 lg:border-8 border-black"
                src={photo2}
                alt="photo"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] w-[100%] flex flex-col justify-center items-center h-[100%] pt-[3%]">
          <h1 className="text-black w-[90%] text-xl lg:text-3xl mb-[2rem] font-bold text-center">
            {t('aboutAs.sectionThree.1')}
          </h1>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t('aboutAs.sectionThree.2')}
          </p>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t('aboutAs.sectionThree.3')}
          </p>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t('aboutAs.sectionThree.4')}
          </p>
          <p className="text-black m-[1rem] mb-[1rem] text-sm lg:text-lg">
            {t('aboutAs.sectionThree.5')}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutAs;
