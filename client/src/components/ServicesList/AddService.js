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

export default function AddService() {
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
            <h4>Add Service</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4 shadow-lg">
              <form className="w-75" action="">
                <div className="form-box d-flex justify-content-around">
                  <div className="form-left">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        className="form-control my-2"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="des">Description</label>
                      <textarea
                        className="form-control my-2"
                        name="des"
                        id="des"
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-right mt-4">
                    <input type="file" className="form-control my-2" />
                  </div>
                </div>
                <div className="d-flex justify-content-end my-3">
                  <input
                    type="submit"
                    className="form-control primary-btn w-25"
                    value="Send"
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
