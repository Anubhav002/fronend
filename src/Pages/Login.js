import React, { useState } from 'react'
import "../Pages/login.css"
import img1 from "../images/Header_logo.jpg"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div>
        <div className='login'>
            <div className="login-container">
                <div className="left">
                    <div>
                        <img src={img1} alt="" width={100}/>
                    </div>
                    <div className='heading'>
                        <h3>Enter Your details and start your journey with us</h3>
                        <br />
                        <p>Don't stop until you're proud</p>
                    </div>
                    <div className="btn">
                        <button>
                            sign in with google
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h3>Login To Your Account</h3>
                    </div>
                    <br />
                    <div>
                        <input 
                        value={username} 
                        className='input' 
                        type="text"
                        placeholder='TTN Username'
                        onChange={((e)=>{setUsername(e.target.value)})} />
                    </div>
                    <br />
                    <div>
                        <input 
                        value={password} 
                        className='input' 
                        type="password" 
                        placeholder='Password' 
                        onChange={((e)=>{setPassword(e.target.value)})}/>
                    </div>
                    <div className='checkbox'>
                        <div><input type="checkbox"/>Remember Me</div>
                        <h5>Forgot Password?</h5>
                    </div>
                    <br />
                    <div className='btn2'>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login