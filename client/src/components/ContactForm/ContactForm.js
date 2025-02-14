import React from "react";
import "./ContactForm.css";
import Footer from "../Footer/Footer";
const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="form-text w-75">
              <h3>Let us handle your project, professionally.</h3>
              <p>
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form py-4">
              <form className="d-flex flex-column" action="">
                <input
                  className="form-control my-2 "
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="form-control my-2 "
                  type="email"
                  placeholder="Your email"
                />
                <textarea
                  className="form-control my-2 text-box "
                  name="message"
                  id="message"
                ></textarea>
                <input
                  className="primary-btn py-2 px-3 w-25 mt-3"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
