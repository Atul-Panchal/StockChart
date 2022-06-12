import React, { useState } from "react";
import Axios from "../Request/Axios";
import "./ContactUs.css";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onSubjectChange(e) {
    setSubject(e.target.value);
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await Axios.post("/contactus_mail", {
      name,
      email,
      message,
      subject,
    });
    if (response.data.condition) {
      alert("Thanks for contact us!");
      setEmail(function () {
        return "";
      });
      setMessage(function () {
        return "";
      });
      setName(function () {
        return "";
      });
      setSubject(function () {
        return "";
      });
    } else {
      alert("Please Try Again Later!");
    }
  }

  return (
    <>
      <div className="row container text-center">
        <div className="col-lg-1 col-md-12"></div>
        <div className="col-lg-5 col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717750568!2d72.4396552395111!3d23.020497770851204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1619083071544!5m2!1sen!2sin"
            width="450"
            height="410"
            style={{ border: "0" }}
            title="office-location"
            allowFullScreen=""
            loading="lazy"
            className="my-4"
          ></iframe>
        </div>
        <div className="col-lg-2 col-md-12"></div>
        <div className="col-lg-4 col-md-12">
          <div
            className="card shadow my-4 contact-us-card"
            // style={{width: '20rem'}}
          >
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="text"
                    onChange={onNameChange}
                    value={name}
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="email"
                    onChange={onEmailChange}
                    value={email}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="text"
                    onChange={onSubjectChange}
                    value={subject}
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    required
                    type="text"
                    onChange={onMessageChange}
                    value={message}
                    placeholder="Message"
                    rows="5"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
