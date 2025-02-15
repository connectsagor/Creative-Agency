import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../../images/logos/logo.png";
import { Link } from "react-router";
import "./ServicesList.css";
import {
  PersonCheckFill,
  PersonRaisedHand,
  BagPlusFill,
} from "react-bootstrap-icons";

export default function Table() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [data, setData] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  useEffect(() => {
    fetch("http://localhost:5000/allUsers")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      });
  }, []);

  console.log(data);
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
            <h4>Services List</h4>
            <h5 className="me-5">{user && user.displayName.toUpperCase()}</h5>
          </div>
          <div className="services-info">
            <div className="p-4">
              <table className="w-100 text-center shadow-lg rounded-2">
                <thead>
                  <tr>
                    {[
                      "Name",
                      "Email ID",
                      "Service",
                      "Project Details",
                      "Status",
                    ].map((key) => (
                      <th
                        key={key}
                        className="p-2 cursor-pointer"
                        onClick={() => handleSort(key)}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                        {sortConfig.key === key
                          ? sortConfig.direction === "asc"
                            ? "⬆️"
                            : "⬇️"
                          : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((row, index) => (
                      <tr key={index} className="border">
                        <td className="p-2 ">{row.name}</td>
                        <td className="p-2 ">{row.email}</td>
                        <td className="p-2 ">{row.title}</td>
                        <td className="p-2">{row.description}</td>
                        <td className="p-2 ">
                          {row.status ? row.status : "Pending"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
