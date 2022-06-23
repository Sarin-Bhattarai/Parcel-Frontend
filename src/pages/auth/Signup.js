import React, { useState } from "react";
import { signup } from "../../utils/others/authApi";
import { Link } from "react-router-dom";
import { message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    error: null,
    success: false,
  });

  const { name, email, password, phone, location, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: null, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: null });
    signup({ name, email, password, phone, location })
      .then(({ data }) => {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          phone: "",
          location: "",
          error: null,
          success: true,
        });
        message.success("Successfully created account");
      })
      .catch((error) => {
        setValues({ ...values, error: error, success: false });
        message.error(error?.message || "Error while creating account");
        console.log(error);
      });
  };

  const signupForm = () => (
    <div className="signup-container">
      <h2 className="signup-header">Registration page</h2>
      <form onSubmit={clickSubmit}>
        <label>Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          required
          placeholder="Your name"
          value={name}
        />
        <br />
        <br />
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
        <label>Phone</label>
        <input
          onChange={handleChange("phone")}
          type="tel"
          required
          placeholder="Your phone number"
          value={phone}
        />
        <br />
        <br />
        <label>Location</label>
        <input
          onChange={handleChange("location")}
          type="text"
          required
          placeholder="Your current location"
          value={location}
        />
        <br />
        <br />
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );

  const showSuccess = () => {
    if (!success) {
      return null;
    }
    return (
      <div className="alert alert-info">
        New Account is created. Please <Link to="/login">Login</Link>
      </div>
    );
  };

  return (
    <>
      {showSuccess()}
      {signupForm()}
    </>
  );
};

export default Signup;
