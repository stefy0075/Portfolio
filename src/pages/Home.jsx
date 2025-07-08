import { useTranslation } from 'react-i18next';
import Grafic2 from '../components/grafic2';
import Carousel from '../components/carousel';
import computer from '../assets/computer.svg';
import { motion } from 'framer-motion';
import './bg.css';

function App() {
  const { t } = useTranslation();
  const solutions = t('solutions', { returnObjects: true });

  return (
    <main className="min-h-[100vh] w-full overflow-x-hidden ">
      <section className="w-full h-[calc(100vh)] shadow-xl overflow-hidden">
        <Carousel />
      </section>
      <section className="w-full min-h-screen flex flex-col-reverse border-2 border-blue lg:flex-row items-center justify-center px-6 py-10 bg-secondary gap-6 lg:gap-12">
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }} // Se activa cuando el 50% entra en viewport
          className="w-full lg:w-[55%] space-y-5 text-center lg:text-left max-w-3xl"
        >
          <h1 className="text-primary font-bold text-3xl lg:text-4xl">
            {t('titleHome')}
          </h1>
          <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
            {t('presentation')}
          </p>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className="w-full lg:w-[45%] flex justify-center"
        >
          <img
            src={computer}
            alt="Computer"
            className="w-[80%] max-w-md object-contain rounded-xl drop-shadow-xl"
          />
        </motion.div>
      </section>

      {/* Sección de soluciones */}
      <section className="w-full min-h-screen bg-quaternary text-black flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Grafic2 />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold text-2xl lg:text-4xl text-center mb-6">
            {t('subtitleHome')}
          </h2>
          <p className="text-base lg:text-lg mb-6 text-center lg:text-left">
            {t('descriptionHome')}
          </p>
          <ul className="list-disc pl-6 text-base lg:text-lg space-y-3">
            {solutions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-base lg:text-lg mt-6 text-center lg:text-left">
            {t('descriptionHomeFinal')}
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
