import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
import headerImg from "./../../images/logos/Frame.png";

const Header = () => {
  return (
    <div className="Header">
      <Nav />

      <div className="container">
        <div className="row header-row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="header-text w-75">
              <h1 className=" font-monospace text-uppercase">
                Let’s Grow Your Brand To The Next Level
              </h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat{" "}
              </p>
              <button className="primary-btn py-2 px-3">Hire Us</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-img">
              <img className="w-75" src={headerImg} alt="header" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
