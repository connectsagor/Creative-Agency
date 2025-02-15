import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router";
import logo from "../../images/logos/logo.png";
import { UserContext } from "../../App";
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const UserContextInfo = useContext(UserContext);
  const { loggedIn, setLoggedIn } = UserContextInfo[1];

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
        sessionStorage.removeItem("user");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            <img className="w-25" src={logo} alt="logo" />
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {loggedIn ? (
                <Link to="/dashboard" className="nav-link" aria-current="page">
                  Dashboard
                </Link>
              ) : (
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link to="/our-portfolio" className="nav-link">
                Our Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-team" className="nav-link">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              {loggedIn ? (
                <Link
                  onClick={handleLogout}
                  className="nav-link py-2 px-3 primary-btn"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-link py-2 px-3 primary-btn">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
