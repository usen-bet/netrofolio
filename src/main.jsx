import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./routes/Contact.jsx"
import Qual from "./routes/Qual.jsx"
import Blog from './routes/Blog.jsx';
import Blogdeets from "./routes/Blogdeets.jsx"
import Home from "./Home.jsx"
import Blogmain from "./routes/Blogmain.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />   // 👈 your old App content
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "blog/:id",
        element: <Blogdeets />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "qual",
        element: <Qual />
      }
    ]
  },
  {
    path: "/blogmain",
    element: <Blogmain />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
