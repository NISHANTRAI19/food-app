import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandler from "./components/Errorhandler";



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const routeConfig = [{
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorHandler />

},
{
    path: "/about",
    element: <About />
}
]
const appRouter = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(<RouterProvider router={appRouter} />)
