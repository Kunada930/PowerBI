import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import './index.css';
import './styles/page.css'
import App from './App';
import Page from './components/page';
import About from './components/about'
import Contact from './components/contactUs'
import MainMenu from './components/mainMenu'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dadospowerbiportal",
    element: <Page/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/ninmenu",
    element: <MainMenu/>
  }
], {
  basename: "/PowerBI"  // This should match your repository name
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
