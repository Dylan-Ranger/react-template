import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl">Register</h1>
            <input placeholder="Name" type="email"/>
            <input placeholder="email" type="email"/>
            <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </>
    )
}

export default Register;