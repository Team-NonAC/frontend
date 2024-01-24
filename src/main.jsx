import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';
import Application from './components/Application.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/signup",
    element:<Signup/>,
  },
  {
    path:"/application",
    element:<Application/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
