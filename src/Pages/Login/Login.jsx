import React, { useState } from 'react';
import "./Login.css";
import logo from '../../assets/netflix_logo.jpg';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const toggleSignState = () => {
    setSignState(signState === "Sign In" ? "Sign Up" : "Sign In");
  };

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && <input type='text' placeholder='Your name'/>}
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p><a className='.form-help p ' href='https://help.netflix.com/en'>Need Help?</a></p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Netflix? <span onClick={toggleSignState}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={toggleSignState}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
