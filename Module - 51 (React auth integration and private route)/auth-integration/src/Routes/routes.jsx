import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Orders from "../Components/Orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {
        path : "/",
        index : true,
        Component : Home 
      },
      {
        path : "login",
        Component : Login
      },
      {
        path : "register",
        Component : Register
      },
      {
        path : "orders",
        element : <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  },
]);