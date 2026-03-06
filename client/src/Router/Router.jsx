import { createBrowserRouter } from "react-router";

import About from "../Pages/About";
import LayOut from "../MainLayOut/LayOut";
import Home from "../Components/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
        {
            path: "/",
            element:<Home /> 
        },
        {
            path: "about",
            element:<About /> 
        }
    ]
  },
]);