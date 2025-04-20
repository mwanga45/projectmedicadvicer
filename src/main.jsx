import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './home/home.jsx'
import Authentic from './Authentic/authentic.jsx'
import Profile from './details/profile.js'
import ProgressPage from './progress/ProgressPage.jsx'

import './index.css'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Authentic />
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
       path:"/progress",
       element:<ProgressPage/>
      }
      

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
