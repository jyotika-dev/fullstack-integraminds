import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
// import 

import LoginForm from "./Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
  ]);

  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
      </nav>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
