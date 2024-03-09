import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/crypto/cryptoSlice';
import { toast } from 'react-toastify';

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.crypto)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const {email, password} = formData;

  const handleChange = (e) => {
     setFormData({
      ...formData,
      [e.target.name]: e.target.value,
     });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  };

  useEffect(() => {

  if (user && isSuccess){
    navigate("/");
    toast.success("User Login Successfully!!")
  }

  if(isError && message){
    toast.error(message);
  }
}, [user, isSuccess, isError, message]);


  if (isLoading) {
    return (
      <div className="container-fluid d-flex align-item-center justify-content-center my-5">
      <div className="spinner"></div>
      </div>
    );
  }


  return (

    <div className="register-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="head">
            <span>Log In</span>
            <p style={{color : "black", marginTop: "5px"}}>Welcome back! Please enter your credentials to access your account.</p>
          </div>
          <div className="inputs">

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

          </div>
          <button>Submit</button>
        </form>
        <div className="form-footer">
          <p>
          Don't have an account? <Link to={"/register"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>


  )
}

export default Login;


