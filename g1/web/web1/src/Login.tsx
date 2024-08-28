import React from "react";
import axios from "axios";

const LoginForm = () => {
    
    const [email, setEmail] = React.useState("s1@gmail.com");
    const [password, setPassword] = React.useState("p1");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(email, password);

        const response = await axios({
            method: 'post',
            url: '${G_URL}/login',
            data: {
                email,
                password
            }
        });
        console.log(response);
    };


    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            keep
            Pinned
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;


























