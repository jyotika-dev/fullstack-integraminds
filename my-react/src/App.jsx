import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Posts from "./Posts"
// import PostsFromServer from "./PostsFromServer";
import UserComponent from "./user";

const App = () => {
  // const state = useState(0);
  // const [count, setCount] = state;
  // const setValue = state[1];
  const [value, setValue] = useState(0);

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
  // };
  const onClickInParentComponent = (data) => {
    console.log("Clicked from child component", data);
  };

  return (
    <>
    <div className="container">
      {users.map((user,index)=>(
        <UserComponent key={index} data={user} onClickFromChild={onClickInParentComponent}/>
      ))}
    </div>
    </>
    );
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <div>
    //   <>
    //   <h2>Posts</h2>
    //   <ul>
    //     {posts.map((post) => (
    //       <li key={post.id}>{post.title}</li>
    //       ))}
    //   </ul>

    {/* <h2>Value: {value}</h2>
        <button onClick={onClick}>Click me!</button> */}


    // here we are passing data as props to UserComponent
    // parent to child communication

  //   < div  >
  //   <>
  //     <UserComponent
  //       data={{ name: "Johan", age: 30 }}
  //       onClickFromChild={onClickInParentComponent}
  //     />
  //   </>
  // </div >

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
