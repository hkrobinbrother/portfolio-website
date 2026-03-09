import { createBrowserRouter } from "react-router";

import About from "../Pages/About";
import LayOut from "../MainLayOut/LayOut";
import Home from "../Components/Home/Home";
import Projects from "../Pages/Projects";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";



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
        },
        {
            path: "projects",
            element:<Projects /> 
        },
        {
            path: "blogs",
            element:<Blogs /> 
        },
        {
            path: "contact",
            element:<Contact /> 
        },
    ]
  },
  {
    path: "login",
    element: <Login />
  }
]);