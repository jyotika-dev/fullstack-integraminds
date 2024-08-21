//Create a component to display the user data
//1. Default import
//import React from the 'react' 
//export default React
//2. Named Import
//import the {useState, useEffect} 'react'
// Method 1: export {useState, useEffect}
//or 
// Method 2: 
// export const useState = ..
// export const useEffect = ..

import React from "react";

const UserComponent = (props) => {
    console.log("🚀 ~ UserComponent ~ ̥:", props)
    //props is the object type
    //Object destructuring
    const { data } = props;

    return (
        <div className="user">
            <h2>User</h2>
            <h3>{data.name}</h3>
            <p>{data.email}</p>

            <button onClick={(e) => props.onClickFromChild(data)}>Print the user JSON </button>
        </div>
    );
};

export default UserComponent;