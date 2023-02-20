import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Login from './routes/Login'
import Profile from './routes/Profile'
import Expenses from './routes/Expenses'
import Layout from './layouts/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <App/>
      },
      {
        path: 'expenses',
        element: <Expenses/>
      },  
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
