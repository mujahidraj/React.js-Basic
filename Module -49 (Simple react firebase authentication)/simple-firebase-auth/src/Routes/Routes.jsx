import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Layouts/Root.jsx";
import Homepage from "../Layouts/Home/Homepage.jsx";
import Login from "../Components/Login/Login.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement : <div>Something went wrong</div>,
    children : [
      {
        index : true,
        path : "/",
        Component : Homepage
      },
      {
        path : "/login",
        Component : Login
      }
    ]
  },
]);
