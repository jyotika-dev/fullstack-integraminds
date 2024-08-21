import React, { useEffect, useState } from "react";

const PostsFromServer = (props: any) => {
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
            <h2>Posts:{props.title}</h2>
            <ul>
                {posts.map((post) => ( // Use 'post' for individual post object
                    <li key={post.id}>
                        <h2>{post.userId}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => props.onClickFromParent(props.title)}></button>
        </div>
    );
}
export default PostsFromServer;