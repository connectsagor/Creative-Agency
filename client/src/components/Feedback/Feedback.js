import React from "react";

const feedbacks = [
  {
    id: 1,
    name: "Nash Patrik",
    work: "CEO, Manpol",
    img: "customer-1.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 2,
    name: "Miriam Barron",
    work: "CEO, Manpol",
    img: "customer-2.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 3,
    name: "Bria Malone",
    work: "CEO, Manpol",
    img: "customer-3.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
];
const Feedback = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h2>
          Clients <span className="sub-color">Feedback</span>
        </h2>
      </div>

      <div className="row mt-5">
        {feedbacks.map((fed) => {
          return (
            <div className="col-md-4" key={fed.id}>
              <div className="users-items shadow-lg p-4 rounded-1">
                <div className="user-profile d-flex justify-content-start align-items-center mb-4">
                  <img
                    className="w-25 me-4"
                    src={require(`./../../images/${fed.img}`)}
                    alt="customer"
                  />
                  <div>
                    <h4>{fed.name}</h4>
                    <h5>{fed.work}</h5>
                  </div>
                </div>
                <div className="user-review d-flex justify-content-start">
                  <p className="">{fed.des}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
