import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from './Components/Header/Navbar.jsx';
import HomeContent from './Components/HomeContent/HomeContent.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
import MainContent2 from './Components/MainContent2/MainContent2.jsx';
import UserDetails from './Components/Users/UserDetails.jsx';
import MoreUsers from './Components/MoreUsers/MoreUsers.jsx';
import Userdetails2 from './Components/Userdetails/Userdetails2.jsx';


const userFetch  = fetch ("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component : Navbar,
    children :[
      {index:true , Component : HomeContent},
      {path : "MainContent" , Component : MainContent},
      {path : "mainContent2", Component : MainContent2},
      {path : "UserDetails",
        loader: ()=> fetch ("https://jsonplaceholder.typicode.com/users").then(res=>res.json()),
        Component: UserDetails

      },
      {path : "MoreUsers", 
        element : <Suspense fallback={<h2>I am suspense</h2>}>
          <MoreUsers userFetch={userFetch}></MoreUsers>
        </Suspense>
      },
      {path  : "UserDetails/:userId",
        Component : Userdetails2
      }
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
