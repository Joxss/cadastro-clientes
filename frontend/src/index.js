import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Views/Home/Home';
import List from './Views/List/List';
import Form from './Views/Form/Form';
import './index.css';

const router = createBrowserRouter([
  {path:"/", element:<Home/> },
  {path:"/list", element:<List/> },
  {path:"/form", element:<Form/> },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);