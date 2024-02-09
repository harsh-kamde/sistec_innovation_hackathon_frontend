import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "../../stylesheets/ContactUsStyle.css";
import Lottie from "lottie-react";
import ContactSupport from "../../animations/contact_us.json";
import { isNotEmpty, validateEmail } from "../../utils/utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/auth/admin-login`;

const AdminLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const [errors, setErrors] = useState({});
  const [isLoading2, setIsLoading] = useState(false);

  // validating the data
  const validate = () => {
    let temp = {};

    temp.email = validateEmail(user.email) ? "" : "Incorrect email format";
    temp.password = isNotEmpty(user.password) ? "" : "Password is Required";

    setErrors({ ...temp });

    return Object.values(temp).every((value) => value === "");
  };

  // handling input fields as user types
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });

    if (name === "email")
      setErrors({
        ...errors,
        [name]: validateEmail(e.target.value) ? "" : "Incorrect email format",
      });
    else if (name === "password")
      setErrors({
        ...errors,
        [name]: isNotEmpty(e.target.value) ? "" : "password is required",
      });
  };

  // form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validate()) {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          toast.success("Login Successful");
          const data = await response.json();
          // localStorage.setItem("token",data);
          storeTokenInLS(data.token);
          setUser({ email: "", password: "" });
          setIsLoading(false);
          navigate("/admin/dashboard");
          // < AdminPage />
        }
        else{
          toast.error("Invalid credentials");
          setIsLoading(false);
          setUser({ email: "", password: "" });
        }
      } catch (error) {
        toast.error('Something went wrong :( ');
        setIsLoading(false);
        setUser({ email: "", password: "" });
      }
    } else {

      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          {/* Login Form */}
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side Part */}
                <div className="contact-left-side col-12 col-lg-5">
                  <figure>
                    <Lottie
                      loop={true}
                      animationData={ContactSupport}
                      className="lottie-animation"
                    />
                  </figure>
                </div>

                {/* Right Side Part */}
                <div className="contact contact-right-side col-12 col-lg-7">
                  <h1 className="main-heading fw-bold">Admin Login</h1>

                  <form onSubmit={handleSubmit}>
                    {/* first row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          name="email"
                          autoComplete="off"
                          value={user.email}
                          onChange={handleInput}
                          disabled={isLoading2}
                        />
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                      </div>
                    </div>

                    {/* second row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          name="password"
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInput}
                          disabled={isLoading2}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="my-btn w-100"
                      disabled={isLoading2}
                    >
                      {isLoading2 ? "Loading..." : "Login"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
