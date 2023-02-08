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
import Contact from './pages/Contact'
import Photography from './pages/Photography';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: "/contact", element: <Contact /> },
      {path: "/photography", element: <Photography /> }
    ], 
  },

]);

function App(){
  return <RouterProvider router={router} />;
}  

export default App;
