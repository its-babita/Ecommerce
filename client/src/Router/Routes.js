import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../Components/Wrapper/LayoutWrapper";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Register from "../Pages/Auth/Register";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);
