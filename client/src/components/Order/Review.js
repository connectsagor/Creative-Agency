import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./Order.css";

import { BagPlusFill, CartCheckFill, Search } from "react-bootstrap-icons";
const Review = () => {
  const fileInputRef = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [userName, setUserName] = useState("");
  const [coName, setCoName] = useState("");
  const [review, setReview] = useState("");
  const [file, setFile] = useState("");

  const [message, setmessage] = useState("");
  const [Error, setError] = useState("");
  const handleAddReview = (e) => {
    e.preventDefault();
    const userId = user && user.uid;

    const ReviewForm = new FormData();
    ReviewForm.append("userName", userName);
    ReviewForm.append("coName", coName);
    ReviewForm.append("review", review);
    ReviewForm.append("avater", file);

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      body: ReviewForm,
    })
      .then((res) => res.json())
      .then((result) => {
        setUserName("");
        setCoName("");
        setReview("");

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        alert("Order confirmed");
        return setmessage(result);
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="service_list container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar p-4">
          <Link to="/">
            <img className="w-50" src={logo} alt="logo" />
          </Link>

          <div className="services_buttons d-flex flex-column gap-3 mt-4">
            <Link className="d-flex align-items-center" to="/order">
              <CartCheckFill className="me-2" /> <span>Order</span>
            </Link>
            <Link className="d-flex align-items-center" to="/my-service">
              <BagPlusFill className="me-2" /> <span>My Services</span>
            </Link>
            <Link className="d-flex align-items-center" to="/review">
              <Search className="me-2" /> <span>Review</span>
            </Link>
          </div>
        </div>
        <div className="col-md-9 p-4 order-col">
          <div className="d-flex justify-content-between">
            <h4>Order</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4 shadow-lg mt-3 rounded-1">
              <form
                onSubmit={handleAddReview}
                className="w-50"
                action="/addReview"
              >
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  className="form-control my-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setCoName(e.target.value)}
                  value={coName}
                  className="form-control my-2"
                  type="text"
                  name="co-name"
                  id="co-name"
                  placeholder="Company Name"
                />
                <textarea
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                  className="form-control my-2"
                  name="message"
                  id="message"
                  placeholder="Description"
                ></textarea>
                <input
                  ref={fileInputRef}
                  name="avater"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  className="form-control my-2"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="primary-btn mt-3 py-2 px-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
