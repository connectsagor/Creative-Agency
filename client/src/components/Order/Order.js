import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./Order.css";

import Sidebar from "../Sidebar/Sidebar";

const Order = () => {
  const fileInputRef = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  const [message, setmessage] = useState("");
  const [Error, setError] = useState("");

  const handleSubmitOrder = (e) => {
    const userId = user && user.uid;
    e.preventDefault();
    const OrderForm = new FormData();
    OrderForm.append("userId", userId);
    OrderForm.append("name", name);
    OrderForm.append("email", email);
    OrderForm.append("title", projectName);
    OrderForm.append("description", projectDetails);
    OrderForm.append("price", price);
    OrderForm.append("image", file);

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      body: OrderForm,
    })
      .then((res) => res.json())
      .then((result) => {
        setName("");
        setEmail("");
        setProjectName("");
        setProjectDetails("");
        setPrice("");
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
            <Sidebar />
          </div>
        </div>
        <div className="col-md-9 p-4 order-col">
          <div className="d-flex justify-content-between">
            <h4>Order</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4 shadow-lg mt-3 rounded-1 w-75">
              <form
                onSubmit={handleSubmitOrder}
                className="d-flex flex-column w-75 "
                action="/addOrder"
              >
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control my-2"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control my-2"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  className="form-control my-2"
                  type="text"
                  placeholder="Project"
                />
                <textarea
                  onChange={(e) => setProjectDetails(e.target.value)}
                  value={projectDetails}
                  className="form-control my-2"
                  name="project-details"
                  id="project-detais"
                  placeholder="Project Details"
                ></textarea>
                <div className="d-flex gap-3">
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="form-control my-2"
                    type="number"
                    placeholder="Price"
                  />
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    className="form-control my-2"
                    name="image"
                    type="file"
                    ref={fileInputRef}
                  />
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
