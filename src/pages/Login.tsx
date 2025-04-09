import React from "react";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl">Login</h1>
            <input placeholder="Name" type="email"/>
            <input placeholder="email" type="email"/>
            <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
        </>
    )
}

export default Login;