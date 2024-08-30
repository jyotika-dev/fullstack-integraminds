import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React,{useState} from "react";
import "./App.css";
import LoginForm from "./Login";
import RegisterForm from "./Register";
// import DashboardPage from "./Dashboard"


function App() {
  const [user, setUser] = useState(null);
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
    },
    // {
    //   path: "/dashboard",
    //   element: <DashboardPage/>,
    // }
  ]);
  
  //Listen to the local storage for the changes
  window.addEventListener("storage", (event) => {
    if (event.key === "token") {
      setUser(JSON.parse(event.newValue));
    }
  });

  return (
    <>
      <nav>
        <a href="/">Home</a>
      
        {!user && (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
        {/* {user && (
          <>
            <a href="/dashboard">Dashboard</a>
          </>
        )} */}
{/*         
        <a href="/login">Login</a>
        <a href="/register">Register</a> */}
      </nav>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
