import React from "react";

const login =() => {
    return (
        <login>
            <div className="form-inner">
            <h1>Login</h1>
            <label>Email:</label>
            <input type="text" className="form-input" placeholder="Email" />
  <label>Password:</label>
  <input type="text" className="form-input" placeholder="Password" />
           <button className="form-button" type="submit">Submit</button>
            <p className="signup-form">
<a className="signup-link" href="./" id="signup-link">Don't have an account? Create account </a>
</p>
</div>
        </login>
    
    )
}

export default login;