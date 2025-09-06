import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement : <ErrorPage></ErrorPage>,
    children : [
      // {
      //   path: '/',
      //   element : <Home></Home>,
      // },
      // {
      //   path : 'Dashboard',
      //   element : <Dashboard></Dashboard>
      // }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
