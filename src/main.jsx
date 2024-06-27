import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/blogs',
        element: <Blogs/>,
        loader: ()=> fetch('https://dev.to/api/articles?per-page=20') 
      },
      {
        path:'/bookmarks',
        element: <Bookmarks/>
      },
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
