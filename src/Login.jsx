import React, { useState } from "react";
import './login.css'
import { Link } from "react-router-dom";

function Login(event){
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
    return (
        <div className="login">
        <Link to="/">
        <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
        </Link>

        <div className="login_container">
            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
            </form>

                 <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button type="submit" onClick={register} className= "login__registerButton">Create your Amazon account</button>
        </div>

        </div>
    )
};

export default Login;