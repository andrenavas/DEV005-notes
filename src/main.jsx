import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Login.jsx'
import Wall from './Wall.jsx'
import ErrorPage from './error-page';
import Register from './Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/wall",
    element: <Wall/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
