import { createHashRouter } from "react-router-dom";
import App from "./src/pages/Home";
import Layout from "./src/Layout/Layout";
import AboutMe from "./src/pages/AboutMe";
import ContactForm from "./src/pages/Contacts";
import Projects from "./src/pages/Projects";
import Skills from "./src/pages/Skills";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
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