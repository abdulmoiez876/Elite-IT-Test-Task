import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/Home";
import Listing from "./pages/listing/Listing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "listing",
                element: <Listing />
            }
        ]
    }
])