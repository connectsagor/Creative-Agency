import React, { useContext, useState } from "react";
import {
  PersonCheckFill,
  PersonRaisedHand,
  BagPlusFill,
  CartCheckFill,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router";
import { UserContext } from "../../App";

const Sidebar = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const emailId = user && user.email;

  const UserContextInfo = useContext(UserContext);
  const { Isadmin, setIsAdmin } = UserContextInfo[2];
  return (
    <>
      {Isadmin && (
        <>
          <Link className="d-flex align-items-center" to="/admin">
            <PersonRaisedHand className="me-2" /> <span>Service List</span>
          </Link>
          <Link className="d-flex align-items-center" to="/add-service">
            <BagPlusFill className="me-2" /> <span>Add Service</span>
          </Link>
          <Link className="d-flex align-items-center" to="/user">
            <CartCheckFill className="me-2" /> <span>Order</span>
          </Link>
          <Link className="d-flex align-items-center" to="/my-service">
            <BagPlusFill className="me-2" /> <span>My Services</span>
          </Link>
          <Link className="d-flex align-items-center" to="/review">
            <Search className="me-2" /> <span>Review</span>
          </Link>
          <Link className="d-flex align-items-center" to="/make-admin">
            <PersonCheckFill className="me-2" /> <span>Make Admin</span>
          </Link>
        </>
      )}

      {!Isadmin && (
        <>
          <Link className="d-flex align-items-center" to="/user">
            <CartCheckFill className="me-2" /> <span>Order</span>
          </Link>
          <Link className="d-flex align-items-center" to="/my-service">
            <BagPlusFill className="me-2" /> <span>My Services</span>
          </Link>
          <Link className="d-flex align-items-center" to="/review">
            <Search className="me-2" /> <span>Review</span>
          </Link>
        </>
      )}
    </>
  );
};

export default Sidebar;
