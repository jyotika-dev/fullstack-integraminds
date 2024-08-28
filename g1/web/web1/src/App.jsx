import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";

import LoginForm from "./Login";
import RegisterForm from "./Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="home">Home Page</div>,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    }
  ]);

  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
