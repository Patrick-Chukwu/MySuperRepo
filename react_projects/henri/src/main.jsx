import React from 'react'
import ReactDOM from 'react-dom/client'
// import router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
// import root
import Root, { loader as rootLoader } from "./routes/root";

// import error page
import ErrorPage from "./error-page";
// import contact 
import Contact from "./routes/contact";


// declare router

const router = createBrowserRouter([
  {
    path: "/",
    // add root
    element: <Root />,
    // add error page
    errorElement: <ErrorPage />,
    // configure loader
    loader: rootLoader,

    // make the contact route child of the root route
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],

  },
  // create a new route
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
