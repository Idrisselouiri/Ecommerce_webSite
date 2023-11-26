import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [formData, setFormData] = useState({
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
    if (Object.keys(validationErrors).length === 0) {
      axios
        .get("http://localhost:8000/users")
        .then((result) => {
          result.data.map((user) => {
            if (user.email === formData.email) {
              if (user.password === formData.password) {
                alert("Login Successfully");
                navigate("/");
              } else {
                isvalid = false;
                validationErrors = "Wrong Password";
              }
            }
          });
          setValid(isvalid);
          setErrors(validationErrors);
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
            {errors.email}; {errors.password}
          </span>
        )}
        <form className="form-signUp" onSubmit={handleSubmit}>
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
          <button>Log In</button>
        </form>
        <div className="div-link">
          <p>Already have account?</p>
          <a href="">Sign in</a>
        </div>
      </div>
    </section>
  );
};
