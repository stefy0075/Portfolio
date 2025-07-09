import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactForm from './pages/Contacts';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <ContactForm />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
    ],
  },
]);

export default router;
