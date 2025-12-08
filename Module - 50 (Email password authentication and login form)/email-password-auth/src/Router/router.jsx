import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login/Login";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children: [
      { index: true,
         Component: Home
       },
       {
        path: "login",
        Component : Login
       },
       {
        path: "register",
        Component : Register
       }
    ],
  },
]);
