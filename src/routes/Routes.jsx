import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../containers/Home/Home";
import About from "../containers/About/About";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);

export default routes;