import { createBrowserRouter } from "react-router-dom";
import App from "./src/pages/Home";
import Layout from "./src/Layout/Layout";
import AboutAs from "./src/pages/AboutAs";

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
        path: "/contact",
        element: <AboutAs />,
      },
      {
        path: "/proyects",
        element: <AboutAs />,
      },
      {
        path: "/skills",
        element: <AboutAs />,
      },   
    ],
  },
]);

export default router;
