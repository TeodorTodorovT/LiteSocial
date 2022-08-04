import { useRef } from "react";
import "./login.css"

export default function Login() {

    const email = useRef();
    const password = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value);
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
                        minLength="6"
                    />
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
