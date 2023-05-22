import { createBrowserRouter } from "react-router-dom";
import App from './src/App'
import Layout from './Layout'

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <App/>
    }
    ]
}])

export default router;