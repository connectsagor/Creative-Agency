import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./ServicesList.css";

import Sidebar from "../Sidebar/Sidebar";

export default function AddAdmin() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [email, setEmail] = useState("");

  const handleAddAdmin = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/add-admin", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => alert("Requested as an admin"));
  };
  return (
    <div className="service_list container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar p-4">
          <Link to="/">
            <img className="w-50" src={logo} alt="logo" />
          </Link>

          <div className="services_buttons d-flex flex-column gap-3 mt-4">
            <Sidebar />
          </div>
        </div>
        <div className="col-md-9 p-4">
          <div className="d-flex justify-content-between">
            <h4>Add Admin</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4 shadow-lg">
              <form onSubmit={handleAddAdmin} action="/add-admin">
                <div className="form-wrap d-flex w-50 my-4">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
