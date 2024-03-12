import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../containers/Home/Home";
import About from "../containers/About/About";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../../public/news.json')
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]);

export default routes;