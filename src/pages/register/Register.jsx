import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">LiteSocial</h3>
                <span className="loginDesc">Connect with your friends!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Enter password again" className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    <button className="loginRegisterButton">Have an account? Log in!</button>
                </div>
            </div>
        </div>
    </div>
  )
}
