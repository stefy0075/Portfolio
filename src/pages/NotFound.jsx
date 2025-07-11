import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary flex flex-col items-center justify-center p-6 text-center">
      {/* Animación del número 404 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-6xl font-bold text-gray-800">
            Página no encontrada
          </h2>
        </div>
      </motion.div>

      {/* Mensaje principal */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-2xl mb-12"
      >
        <h3 className="text-3xl font-semibold text-gray-700 mb-4">
          ¡Ups! La página que buscas no existe
        </h3>
        <p className="text-xl text-gray-600">
          Puede que el enlace esté roto o la página haya sido eliminada.
        </p>
      </motion.div>

      {/* Botón para volver al inicio */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Volver al inicio
        </Link>
      </motion.div>

      {/* Efecto decorativo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16"
      >
        <div className="w-32 h-32 rounded-full bg-accent/10 absolute bottom-20 left-10"></div>
        <div className="w-20 h-20 rounded-full bg-primary/10 absolute top-20 right-10"></div>
      </motion.div>
    </div>
  );
};

export default NotFound;
