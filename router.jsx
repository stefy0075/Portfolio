import { createBrowserRouter } from "react-router-dom";
import App from "./src/pages/Home";
import Layout from "./src/Layout/Layout";
import AboutAs from "./src/pages/AboutAs";
import ContactForm from "./src/pages/Contacts";
import Proyects from "./src/pages/Proyects";
import Skills from "./src/pages/Skills";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about-as",
        element: <AboutAs />,
      },
      {
        path: "/proyects",
        element: <Proyects />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      
      {
        path: "/skills",
        element: <Skills />,
      },   
    ],
    
  },
]);

export default router;
