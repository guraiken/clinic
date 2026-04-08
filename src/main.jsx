import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login'
import './index.css'

//react router
import { createBrowserRouter, RouterProvider } from 'react-router'

//toastify
import {ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"
import Dashboard from './pages/Dashboard'



export const router = createBrowserRouter([
    {path:"/", element:<Login/>},
    {path:"/dashboard", element:<Dashboard/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router}/>
  </StrictMode>,
)
