import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./Order.css";
import Sidebar from "../Sidebar/Sidebar";
const MyService = () => {
  const [myOrders, setMyOrders] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const id = user.email ? user.uid : null;
  useEffect(() => {
    fetch("http://localhost:5000/my-order?id=" + id)
      .then((res) => res.json())
      .then((result) => setMyOrders(result.data));
  }, []);

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
            <div className="p-4 shadow-lg mt-3 rounded-1">
              <div className="row">
                {myOrders &&
                  myOrders.map((order) => (
                    <div className="col-md-4 d-flex" key={order._id}>
                      <div className="bg-white p-3 rounded-2 m-2">
                        <div className="d-flex justify-content-between align-items-start service-info-top">
                          <img
                            className="w-25 service-img"
                            src={`http://localhost:5000/uploads/${order.image}
`}
                            alt="img"
                          />
                          <button className="status border-warning bg-transparent py-1 px-2 ">
                            {order.status ? "Done" : "Pending"}
                          </button>
                        </div>
                        <div className="service-info-bottom d-flex flex-column align-items-center text-center mt-4">
                          <h4>{order.title}</h4>
                          <p>{order.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
