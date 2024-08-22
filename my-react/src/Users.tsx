import { useEffect, useState } from "react";
import UserComponent from "./user";
import React from "react";

const UsersList = () => {
    [
        { name: "John Doe", age: 30 },
        { name: "hue key", age: 23 },
        { name: "jane doe", age: 25 },
        { name: "Johan", age: 30 },
    ];
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const getUsersDataFromServer = () => {
        setIsLoading(true);
        setTimeout(() => {
            fetch("https://localhost:3000/users")
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    setUsers(data);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError(error.message);
                });
        }, 2000);
    };

    useEffect(() => {
        getUsersDataFromServer();
    }, []);
    return (
        <div>
            <h2>Users List</h2>
            <button onClick={getUsersDataFromServer}>Get Users</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.map((user) => (
                <UserComponent key={user.id} data={user} />
            ))}
        </div>
    );
}
export default UsersList;