import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Contact from "./components/Contact";
import Body from "./components/Body";
import About from "./components/About"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorHandler from "./components/Errorhandler";
import RestrauntMenu from "./components/RestrauntMenu";



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />

        </div>
    )
}
const routeConfig = [{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/restraunts/:resId",
            element: <RestrauntMenu />
        }


    ],

    errorElement: <ErrorHandler />

},

]
const appRouter = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(<RouterProvider router={appRouter} />)
