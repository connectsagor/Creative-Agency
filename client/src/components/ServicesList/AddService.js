import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./ServicesList.css";

import Sidebar from "../Sidebar/Sidebar";

export default function AddService() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [message, setmessage] = useState("");
  const [Error, setError] = useState("");
  const handleAddService = (e) => {
    e.preventDefault();

    const ServiceForm = new FormData();
    ServiceForm.append("name", name);
    ServiceForm.append("email", email);
    ServiceForm.append("title", title);
    ServiceForm.append("description", des);

    fetch("http://localhost:5000/add-service", {
      method: "POST",
      body: ServiceForm,
    })
      .then((res) => res.json())
      .then((result) => {
        setName("");
        setEmail("");
        setTitle("");
        setDes("");
        alert("Service added");
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
            <Sidebar />
          </div>
        </div>
        <div className="col-md-9 p-4">
          <div className="d-flex justify-content-between">
            <h4>Add Service</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4 shadow-lg">
              <form onSubmit={handleAddService} className="w-75" action="">
                <div className="form-box d-flex justify-content-around">
                  <div className="form-left">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
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
                        onChange={(e) => setDes(e.target.value)}
                        value={des}
                        className="form-control my-2"
                        name="des"
                        id="des"
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="form-control my-2"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Email</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="form-control my-2"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
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
