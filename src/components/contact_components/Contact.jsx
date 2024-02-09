import React, { useState } from "react";
import "../../stylesheets/ContactUsStyle.css";
import Lottie from "lottie-react";
import ContactSupport from "../../animations/contact_us.json";
import { isNotEmpty, validateEmail, messageHasLength } from "../../utils/utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/form/contact`;

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // validating the data
  const validate = () => {
    let temp = {};

    temp.username = isNotEmpty(contact.username) ? "" : "Name is Required";
    temp.email = validateEmail(contact.email) ? "" : "Incorrect email format";
    temp.subject = isNotEmpty(contact.subject) ? "" : "Subject is Required";
    temp.message = messageHasLength(contact.message)
      ? ""
      : "Message is required or too short";

    setErrors({ ...temp });

    return Object.values(temp).every((value) => value === "");
  };

  // handling input fields as user types
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

    if (name === "username")
      setErrors({
        ...errors,
        [name]: isNotEmpty(e.target.value) ? "" : "Name is Required",
      });
    else if (name === "email")
      setErrors({
        ...errors,
        [name]: validateEmail(e.target.value) ? "" : "Incorrect email format",
      });
    else if (name === "subject")
      setErrors({
        ...errors,
        [name]: isNotEmpty(e.target.value) ? "" : "Subject is required",
      });
    else if (name === "message")
      setErrors({
        ...errors,
        [name]: messageHasLength(e.target.value)
          ? ""
          : "Mesage is required or too short",
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
          body: JSON.stringify(contact),
        });

        if (response.ok) {
          setContact({ username: "", email: "", subject: "", message: "" });
          toast.success("Message sent successfully");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error('Something went wrong :( ');
        setIsLoading(false);
      }
    } else {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          {/* Contact Form */}
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side Part */}
                <div className="contact-left-side col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">Contact Us</h1>

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
                  <form onSubmit={handleSubmit}>
                    {/* first row */}
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          name="username"
                          autoComplete="off"
                          value={contact.username}
                          onChange={handleInput}
                          disabled={isLoading}
                        />
                        {/* validations */}
                        {errors.username && (
                          <div className="text-danger">{errors.username}</div>
                        )}
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          name="email"
                          autoComplete="off"
                          value={contact.email}
                          onChange={handleInput}
                          disabled={isLoading}
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
                          type="text"
                          placeholder="Subject"
                          className="form-control"
                          name="subject"
                          autoComplete="off"
                          value={contact.subject}
                          onChange={handleInput}
                          disabled={isLoading}
                        />
                        {errors.subject && (
                          <div className="text-danger">{errors.subject}</div>
                        )}
                      </div>
                    </div>

                    {/* third row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <textarea
                          placeholder="Message"
                          className="form-control"
                          name="message"
                          value={contact.message}
                          onChange={handleInput}
                          disabled={isLoading}
                        ></textarea>
                        {errors.message && (
                          <div className="text-danger">{errors.message}</div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="my-btn w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Submit"}
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

export default Contact;
