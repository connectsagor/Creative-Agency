import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./ServicesList.css";
import {
  PersonCheckFill,
  PersonRaisedHand,
  BagPlusFill,
} from "react-bootstrap-icons";

export default function AddAdmin() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="service_list container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar p-4">
          <Link to="/">
            <img className="w-50" src={logo} alt="logo" />
          </Link>

          <div className="services_buttons d-flex flex-column gap-3 mt-4">
            <Link className="d-flex align-items-center" to="/dashboard">
              <PersonRaisedHand className="me-2" /> <span>Service List</span>
            </Link>
            <Link className="d-flex align-items-center" to="/add-service">
              <BagPlusFill className="me-2" /> <span>Add Service</span>
            </Link>
            <Link className="d-flex align-items-center" to="/make-admin">
              <PersonCheckFill className="me-2" /> <span>Make Admin</span>
            </Link>
          </div>
        </div>
        <div className="col-md-9 p-4">
          <div className="d-flex justify-content-between">
            <h4>Add Admin</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4 shadow-lg">
              <form action="">
                <div className="form-wrap d-flex w-50 my-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control w-75"
                  />
                  <input
                    className="form-control primary-btn w-25 ms-2"
                    type="submit"
                    value="Make Admin"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
