import React, { useState } from "react";
import { authenticate } from "../../components/common/authPermission";
import { signin } from "../../utils/others/authApi";
import { message } from "antd";
// import { Link } from "react-router-dom";

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
    setValues({ ...values, error: null });
    signin({ email, password })
      .then(({ data }) => {
        authenticate(data, () => {
          setValues({
            ...values,
            loading: false,
          });
        });
        window.location.href = "/";
      })
      .catch((error) => {
        setValues({ ...values, error: error, loading: false });
        message.error("email/password doesn't match");
        console.log(error);
      });
  };

  const singinForm = () => (
    <div className="signin-container">
      <h2 className="signin-header">Login Page</h2>
      <form onSubmit={clickSubmit}>
        <label>Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          required
          placeholder="Your email"
          value={email}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          required
          placeholder="Your email password"
          value={password}
        />
        <br />
        <br />
        <button type="submit" className="signup-button">
          Signin
        </button>
      </form>
      <br />
      {/* <Link style={{ marginLeft: "8%", fontWeight: "bold" }} to="/register">
        Doesn't have account? Register now!
      </Link> */}
    </div>
  );

  return <>{singinForm()}</>;
};

export default Signin;
