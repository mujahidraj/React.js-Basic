import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Layouts/Root.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement : <div>Something went wrong</div>,
    
  },
]);
