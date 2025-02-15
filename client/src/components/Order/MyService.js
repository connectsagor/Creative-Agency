import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./Order.css";
import img1 from "../../images/icons/service1.png";
import { BagPlusFill, CartCheckFill, Search } from "react-bootstrap-icons";
const MyService = () => {
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
              <div className="row">
                <div className="col-md-4">
                  <div className="bg-white p-3 rounded-2">
                    <div className="d-flex justify-content-between align-items-start service-info-top">
                      {" "}
                      <img className="w-25" src={img1} alt="img" />
                      <button className="status border-0">Pending</button>
                    </div>
                    <div className="service-info-bottom">
                      <h4>Web & Mobile design</h4>
                      <p>
                        We craft stunning and amazing web UI, using a well
                        drrafted UX to fit your product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
