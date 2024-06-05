import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './styles/page.css'
import App from './App';
import Page from './components/page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "PowerBI",
    element: <Page/>
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
