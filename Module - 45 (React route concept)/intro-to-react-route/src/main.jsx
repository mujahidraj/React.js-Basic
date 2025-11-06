import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from './Components/Header/Navbar.jsx';
import HomeContent from './Components/HomeContent/HomeContent.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
import MainContent2 from './Components/MainContent2/MainContent2.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component : Navbar,
    children :[
      {index:true , Component : HomeContent},
      {path : "MainContent" , Component : MainContent},
      {path : "mainContent2", Component : MainContent2}
    ]
   
  },
  {
    path:"about",
    element : <div>My name is about us</div>
  },
  {
    path:"app",
    Component : App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router} />
  </StrictMode>,
)
