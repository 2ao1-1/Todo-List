import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// style
import "./styles/index.css";

import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import AppDashboard from "./pages/AppDashboard.tsx";
import NewList from "./pages/NewList.tsx";
import ListModal from "./pages/ListModal.tsx";
import Error from "./pages/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "app",
        element: <AppDashboard />,
        children: [
          {
            path: "newList",
            element: <NewList />,
          },
          {
            path: ":id",
            element: <ListModal />,
          },
        ],
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
