import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Users from "./components/Users.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import Update from "./components/Update.jsx";
import NewUsers from "./components/CRUD/NewUsers.jsx";
import NewForm from "./components/CRUD/NewForm.jsx";
import NewUpdate from "./components/CRUD/NewUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/form",
      //   element: <Form />,
      // },
      // {
      //   path: "/users",
      //   element: <Users />,
      //   loader: () => fetch("http://localhost:5000/users"),
      // },
      // {
      //   path: "/update/:id",
      //   element: <Update />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/users/${params.id}`),
      // },
      {
        path: "/newUser",
        element: <NewUsers />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/newForm",
        element: <NewForm />,
      },
      {
        path: "/newUpdate/:id",
        element: <NewUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
