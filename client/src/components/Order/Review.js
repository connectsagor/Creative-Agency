import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./Order.css";
import img1 from "../../images/icons/service1.png";
import { BagPlusFill, CartCheckFill, Search } from "react-bootstrap-icons";
const Review = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className="service_list container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar p-4">
          <img className="w-50" src={logo} alt="logo" />

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
              <form className="w-50" action="">
                <input
                  className="form-control my-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="form-control my-2"
                  type="text"
                  name="co-name"
                  id="co-name"
                  placeholder="Company Name"
                />
                <textarea
                  className="form-control my-2"
                  name="message"
                  id="message"
                  placeholder="Description"
                ></textarea>
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
