import React,{useState} from "react";
import axios from "axios";


import "./register.css"

const G_URL = "http://127/.0.0.1:5000"

const RegisterForm = props => {

    const [email, setEmail] = React.useState("s1@gmail.com");
    const [password, setPassword] = React.useState("p1");
    const [isLoading, setIsLoading] = React.useState(false);
    const [serverMsg, setServerMsg] = React.useState("");
    const [className, setClassName] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setServerMsg("");
        setClassName("");
        console.log(email,password);

        const response = await axios({
            method: 'post',
            url: `${G_URL}/register`,
            data: {
                email,
                password
            }
        });

        const { status, cls, msg, payload } = response.data;
        setIsLoading(false);
        setClassName(cls);
        setServerMsg(msg);

        if (status) {
            return;
        }

    };

    return (
        <form id="registerForm" onSubmit={handleSubmit}>
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
            <button type="submit">Register</button>
            <br />
            <br />
            {isLoading && <div className="loading">Loading...</div>}
            {!isLoading && serverMsg && <div className={className}>{serverMsg}</div>}
        </form>
    );
};

export default RegisterForm;



