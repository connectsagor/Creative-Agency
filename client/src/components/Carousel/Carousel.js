import React from "react";
import "./Carousel.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import car1 from "../../images/carousel-1.png";
import car2 from "../../images/carousel-2.png";
import car4 from "../../images/carousel-4.png";
import car5 from "../../images/carousel-5.png";

const Carousel = () => {
  return (
    <div className="carousel-div carousel-main py-5 text-center">
      <div className="container ">
        <div className="row mb-5">
          <h2 className="text-white">
            Here are some of <span className="sub-color">our works</span>
          </h2>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide container">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 img-container-carosel">
                  <img src={car1} className=" w-75" alt="carousel" />
                </div>
                <div className="col-md-4 img-container-carosel">
                  <img src={car2} className=" w-75" alt="carousel" />
                </div>
                <div className="col-md-4 img-container-carosel">
                  <img src={car4} className=" w-75" alt="carousel" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 img-container-carosel">
                  <img src={car2} className="w-75" alt="carousel" />
                </div>
                <div className="col-md-4 img-container-carosel">
                  <img src={car4} className=" w-75" alt="carousel" />
                </div>
                <div className="col-md-4 img-container-carosel">
                  <img src={car5} className=" w-75" alt="carousel" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row ">
                <div className="col-md-4 img-container-carosel">
                  <img src={car1} className=" w-75" alt="carousel" />
                </div>
                <div className="col-md-4 img-container-carosel">
                  <img src={car4} className=" w-75" alt="carousel" />
                </div>
                <div className="col-md-4 img-container-carosel">
                  <img src={car5} className=" w-75" alt="carousel" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon me-5"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon ms-5"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
