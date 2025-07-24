import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
         <h1>Sign up</h1>
       
        <input type="text" placeholder="Enter your name" />
        
        <input type="email" placeholder="Enter your email" />
       
        <input type="password" placeholder="Enter password" />
       
        <input type="password" placeholder="Confirm password" />
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default Signup;
