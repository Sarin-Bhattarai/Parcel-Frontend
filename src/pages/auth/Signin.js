import React, { useState } from "react";
import {
  authenticate,
  isAuthenticated,
} from "../../components/common/authPermission";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: null,
    loading: true,
  });

  const { email, password, error, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: null, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
  };

  const singinForm = () => (
    <div className="signin-container">
      <h2 className="signin-header">Login Page</h2>
      <form>
        <label>Email</label>
        <input type="email" required placeholder="Your email" />
        <br />
        <br />
        <label>Password</label>
        <input type="password" required placeholder="Your email password" />
        <br />
        <br />
        <button onClick={clickSubmit} className="signup-button">
          Signin
        </button>
      </form>
    </div>
  );

  return <>{singinForm()}</>;
};

export default Signin;
