
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Contact from "./components/Contact";
import Body from "./components/Body";
import About from "./components/About"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorHandler from "./components/Errorhandler";
import RestrauntMenu from "./components/RestrauntMenu";

import React, { Suspense, lazy, useContext } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./components/Grocery"))
const AppLayout = () => {
    return (
        <UserContext.Provider value={{ loggedInUser: "Cristiano" }} >
            <div className="min-h-screen bg-gray-800">
                <Header />
                <Outlet />

            </div>
        </UserContext.Provider>
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
        },
        {
            path: "/grocery",
            element: (
                <Suspense fallback=<Shimmer />>
                    <Grocery />
                </Suspense >
            ),
        }


    ],

    errorElement: <ErrorHandler />

},

]
const appRouter = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(<RouterProvider router={appRouter} />)
