import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//styles
import './css/App.css';

//pages
import App from './App';
import ErrorPage from './Error';
import Contact from './pages/Contact'
import Photography from './pages/Photography';
import MyNav from './Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/photography",
    element: <Photography />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
