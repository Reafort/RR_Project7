import React from "react";

const signup = () => {
    return (
        <signup>

            <div className="form-inner">
                <h1>Create an account</h1>
            <label>Full Name:</label>
  <input type="text" className="form-input" placeholder="Full name" />
    <label>Email:</label>
  <input type="text" className="form-input" placeholder="Email" />
    <label>Password:</label>
  <input type="text" className="form-input" placeholder="Password"  />
  <button className="form-button" type="submit">Signup</button>

            </div>
        </signup>
    )
}

export default signup;