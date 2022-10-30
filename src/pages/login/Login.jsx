import { useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress } from "@mui/material"
import { Link } from "react-router-dom";

export default function Login() {

    const email = useRef();
    const password = useRef();
    const {user, isFetching, dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value ,password: password.current.value}, dispatch)
    }

    
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">LiteSocial</h3>
                <span className="loginDesc">Connect with your friends!</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
                    <input 
                        placeholder="Password" 
                        type="password" 
                        className="loginInput" 
                        ref={password} 
                        required 
                        minLength="3"
                    />
                    <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" size="20px"/> : "Log in"}</button>
                    <span className="loginForgot">Forgot password?</span>
                    <Link to="/register">
                    <button className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit" size="20px"/> : "Create an account"}</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
