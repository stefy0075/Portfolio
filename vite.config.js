import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno - método correcto en Vite
  const env = loadEnv(mode, process.cwd(), ''); // El tercer parámetro vacío carga todas las variables

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:5001',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    // Elimina cualquier referencia a process.env aquí
  };
});
