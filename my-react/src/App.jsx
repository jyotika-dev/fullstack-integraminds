import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StateExample from "./StateExample";
import Posts from "./Posts";
import Profile from "./Profile";
import PostsFromServer from "./PostsFromServer";
import UserComponent from "./user";
// import { error } from "console";
import UsersList from "./Users";
// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


const App = () => {
  const [error, setError] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/users",
      element: <div>Hello world!</div>,
    },
  ]);

  
 
  const onClickInParentComponent = (data) => {
    console.log("Clicked from child component", data);
  };


  return (
    <>
      {/* StateExample */}
      {/* <StateExample /> */}

      {/* Profile */}
      {/* <div>
      <h1>Profile</h1>
      <Profile /> */}

      {/* Posts */}
      {/* <h1>Posts</h1>
        <Posts /> */}

      {/* PostsFromServer */}
      {/* <PostsFromServer 
        title=" Posts List 1"
        onClickFromParent={onClickInParent}
      />
      <PostsFromServer 
        title=" Posts List 2"
        onClickFromParent={onClickInParent}
      />
      <PostsFromServer 
        title=" Posts List 3"
        onClickFromParent={onClickInParent}
      />
      <PostsFromServer 
        title=" Posts List 4"
        onClickFromParent={onClickInParent}
      /> */}

      

      <RouterProvider router={router}/>
      <UsersList />
      {/* <button onClick={getUsersDataFromServer}>Refresh</button> */}

      <div className="container">
        {isLoading && (
          <div className="loading">
            <img src="https://i.gifer.com/ZKZg.gif" alt="Loading.." />
            Loading..
          </div>
        )}
        {!isLoading && !error && users.length === 0 && <div>No data found</div>}
        {!isLoading && !error && <div>{error}</div>}
        {!isLoading &&
          !error &&
          users.map((user, index) => (
            <UserComponent
              key={index}
              data={user}
              onClickFromChild={onClickInParentComponent}
            />
          ))}
      </div>
    </>
  );
  //   < div  >
  //   <>
  //   </>
  // </div >
  // <div>
  //   <>
  //   <h2>Posts</h2>
  //   <ul>
  //     {posts.map((post) => (
  //       <li key={post.id}>{post.title}</li>
  //       ))}
  //   </ul>

  {
    /* <h2>Value: {value}</h2>
        <button onClick={onClick}>Click me!</button> */
  }
  {
    /* <div className="container">
        {users.map((user, index) => (
          <UserComponent
            key={index}
            data={user}
            onClickFromChild={onClickInParentComponent}
          />
        ))}
      </div> */
  }
  // here we are passing data as props to UserComponent
  // parent to child communication
};

export default App;

//normal function
// function sampleFunction() {
//   console.log("hellooi");
// }

// export function sampleFunction() {
//   console.log("hellooi");
// }

//arrow function
// const sampleFunction = () => {
//   console.log("hellooi");
// };

// export { App };
// export default App;
