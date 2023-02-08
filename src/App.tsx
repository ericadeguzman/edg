import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//pages
import RootLayout from './pages/Root';
import ErrorPage from './Error';
import HomePage from './pages/Home';
import Projects from './pages/Projects'
import Photography from './pages/Photography';
//styles
import './css/app.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: "/projects", element: <Projects /> },
      {path: "/photography", element: <Photography /> }
    ], 
  },

]);

function App(){
  return <RouterProvider router={router} />;
}  

export default App;
