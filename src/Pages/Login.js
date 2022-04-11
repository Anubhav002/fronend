import React, { useRef, useContext } from 'react'
import "../Pages/login.css"
import img1 from "../images/Header_logo.jpg"
import { loginCall } from '../apiCall';
import { AuthContext } from "../context/AuthContext";


function Login() {
    
    const email= useRef();
    const password= useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const loginHandlar=(e)=>{
        e.preventDefault()
        
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
          );
     }
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
                <form className="right" onSubmit={loginHandlar}>
                
                    <div>
                        <h3>Login To Your Account</h3>
                    </div>
                    <br />
                    <div>
                        <input  
                        className='input' 
                        type="text"
                        placeholder='TTN Username'
                        ref={email}
                         />
                    </div>
                    <br />
                    <div>
                        <input 
                        className='input' 
                        type="password" 
                        placeholder='Password' 
                        ref={password}/>
                    </div>
                    <div className='checkbox'>
                        <div><input type="checkbox"/>Remember Me</div>
                        <h5>Forgot Password?</h5>
                    </div>
                    <br />
                    <div className='btn2'>
                        <button type='submit' disabled={isFetching}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login