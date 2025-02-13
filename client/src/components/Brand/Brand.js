import React from "react";
import "./Brand.css";

const brandData = [
  { id: 1, img: "airbnb.png" },
  { id: 2, img: "google.png" },
  { id: 3, img: "netflix.png" },
  { id: 4, img: "slack.png" },
  { id: 5, img: "uber.png" },
];
const Brand = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="brand-items p-3 d-flex gap-4 justify-content-center align-items-center">
          {brandData.map((brand) => {
            return (
              <img
                className="brand-img"
                key={brand.id}
                src={require(`../../images/logos/${brand.img}`)}
                alt="Brand"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brand;
