import React, { useState } from "react";
import axios from "axios";
import "./login.css"

import { useNavigate } from 'react-router-dom';

const G_URL = "http://127.0.0.1:5000";


const LoginForm = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [serverMsg, setServerMsg] = React.useState("");
    const [className, setClassName] = React.useState("");
    const [email, setEmail] = React.useState("s1@gmail.com");
    const [password, setPassword] = React.useState("p1");

    const navigate = useNavigate(); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setServerMsg("");
        setClassName("");
        console.log(email, password);
        try {
            const response = await axios({
                method: 'post',
                url: `${G_URL}/login`,
                data: {
                    email,
                    password
                }
            });

            const { status, cls, msg, payload } = response.data;
            setIsLoading(false);
            setClassName(cls);
            setServerMsg(msg);

            if (response.data.status === 1) {
                alert("Login Successful")
                localStorage.setItem('token', payload.token);
                navigate("/Dashboard");
            }else{
                alert(response.data.msg)
            }
        } catch (error) {
            setIsLoading(false);
            setClassName("error");
            setServerMsg("Server Error");
        }

    };

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button className="login-btn" type="submit">Login</button>
            <br />
            <br />
            {isLoading && <div className="loading">Loading...</div>}
            {!isLoading && serverMsg && <div className={className}>{serverMsg}</div>}
        </form>
    );
};

export default LoginForm;
