import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/crypto/cryptoSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";

const Register = () => {
  
  // Getting Data From Crypto State//

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.crypto
  );

  //Initializing Hooks//

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Form State//

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //Destructure State//

  const { name, email, password, password2 } = formData;

  //form state logic//

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //form submission//

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords not match!!");
    }
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
      toast.success("User registered Successfully!!");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isSuccess, isError, message]);

  if (isLoading) {
    return (
      <div className="container-fluid d-flex align-item-center justify-content-center my-5">
      <div class="spinner"></div>
      </div>
    );
  }

  return (
    <div className="register-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="head">
            <span>Sign up</span>
            <p>Create a free account with your email.</p>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-footer">
          <p>
            Have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

