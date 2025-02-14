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

const defaultData = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
];

export default function Table() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [data, setData] = useState(defaultData);
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

  return (
    <div className="service_list container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar p-4">
          <img className="w-50" src={logo} alt="logo" />

          <div className="services_buttons d-flex flex-column gap-3 mt-4">
            <Link to="/service-list">
              <PersonRaisedHand className="me-2" /> Service List
            </Link>
            <Link to="/add-service">
              <BagPlusFill className="me-2" /> Add Service
            </Link>
            <Link to="/make-admin">
              <PersonCheckFill className="me-2" /> Make Admin
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
                      "firstName",
                      "lastName",
                      "age",
                      "visits",
                      "status",
                      "progress",
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
                  {data.map((row, index) => (
                    <tr key={index} className="border">
                      <td className="p-2 ">{row.firstName}</td>
                      <td className="p-2 ">{row.lastName}</td>
                      <td className="p-2 ">{row.age}</td>
                      <td className="p-2">{row.visits}</td>
                      <td className="p-2 ">{row.status}</td>
                      <td className="p-2 ">{row.progress}%</td>
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
