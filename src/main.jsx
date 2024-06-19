import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import Error404 from './Pages/Error404.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import './styles/css/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
