import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.fname === "" || formData.fname === null) {
      isvalid = false;
      validationErrors.fname = "first name required";
    }
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email required";
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "password length at least 6 char";
    }
    setValid(isvalid);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((result) => {
          alert("Registration Succesfully");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <section className="Signup">
      <div className="container">
        <div className="title">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>
        {valid ? (
          <></>
        ) : (
          <span>
            {errors.fname} ; {errors.email}; {errors.password}
          </span>
        )}
        <form className="form-signUp" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setFormData({ ...formData, fname: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Link to="/login">Create Account</Link>
        </form>
        <div className="div-link">
          <p>Already have account?</p>
          <Link to={"/login"}>Log in</Link>
        </div>
      </div>
    </section>
  );
};
