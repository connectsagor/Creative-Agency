import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./Order.css";
import { BagPlusFill, CartCheckFill, Search } from "react-bootstrap-icons";
const Order = () => {
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
            <div className="p-4 shadow-lg mt-3 rounded-1 w-75">
              <form className="d-flex flex-column w-75 " action="">
                <input
                  className="form-control my-2"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control my-2"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="form-control my-2"
                  type="text"
                  placeholder="Project"
                />
                <textarea
                  className="form-control my-2"
                  name="project-details"
                  id="project-detais"
                  placeholder="Project Details"
                ></textarea>
                <div className="d-flex gap-3">
                  <input
                    className="form-control my-2"
                    type="number"
                    placeholder="Price"
                  />
                  <input className="form-control my-2" type="file" />
                </div>

                <input
                  className="form-control my-2 w-25 primary-btn"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
