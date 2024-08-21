import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StateExample from "./StateExample";
import Posts from "./Posts";
import Profile from "./Profile";
import PostsFromServer from "./PostsFromServer";
import UserComponent from "./user";
// import { error } from "console";
const App = () => {
  // const posts = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "qui est esse",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  //   },
  // ];

  // let value = 0;
  // const onClick = () => {
  //   value += 1;
  //   console.log(value);
  // };
  // const onClick = () => {
  //   setValue(value + 1);
  //   console.log(value + 1);
  // };

  // const profile = {
  //   name: "John Doe",
  //   age: "25",
  //   email: "",
  //   occupation: "Software Engineer",
  //   hobbies: ["reading", "playing guitar", "singing"],
  //   address: {
  //     street: "123 Main St",
  //     city: "Anytown",
  //     state: "CA",
  //     zip: "12345",
  //   },
  // // };
  const onClickInParentComponent = (data) => {
    console.log("Clicked from child component", data);
  };

  // const users = [
  //   { name: "John Doe", age: 30 },
  //   { name: "hue key", age: 23 },
  //   { name: "jane doe", age: 25 },
  //   { name: "Johan", age: 30 },
  // ];

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

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

      <div className="container">
        {isLoading && (
          <div className="loading">
            <img src="https:i.gifer.com/ZKZg.gif" alt="Loading.." />
            Loading..
          </div>
        )}
        {!isLoading && users.length === 0 && <div>No data found</div>}
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
