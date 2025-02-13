import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Web & Mobile design",
    img: "service1.png",
    des: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
  },
  {
    id: 2,
    title: "Graphic design",
    img: "service2.png",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    id: 3,
    title: "Web development",
    img: "service3.png",
    des: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const Services = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h2 className="mb-5">Provide awesome services</h2>

        {servicesData.map((service) => {
          return (
            <div key={service.id} className="col-md-4 ">
              <div className="services-item w-100 h-100 d-flex flex-column shadow-lg p-4 rounded-1">
                <div className="d-flex justify-content-center">
                  <img
                    className="w-25"
                    src={require(`./../../images/icons/${service.img}`)}
                    alt="service"
                  />
                </div>
                <h4 className="mt-3">{service.title}</h4>
                <p className="">{service.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
