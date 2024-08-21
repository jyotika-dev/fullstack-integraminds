import React, { useEffect, useState } from "react";

const PostsFromServer = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((posts) => (
                    <li key={posts.id}>
                        <h3>{posts.title}</h3>
                        <p>{posts.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}