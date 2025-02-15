import React, { useEffect, useState } from "react";

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
  const [review, setReview] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((result) => {
        setReview(result.data);
      });
  }, []);

  console.log(review);
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h2>
          Clients <span className="sub-color">Feedback</span>
        </h2>
      </div>

      <div className="row mt-5">
        {review &&
          review.map((fed) => {
            return (
              <div className="col-md-4 d-flex" key={fed._id}>
                <div className="users-items shadow-lg p-4 rounded-1">
                  <div className="user-profile d-flex justify-content-start align-items-center mb-4">
                    <img
                      className="w-25 h-25 rounded-circle me-4"
                      src={`http://localhost:5000/uploads/${fed.image}`}
                      alt="customer"
                    />
                    <div>
                      <h4>{fed.userName}</h4>
                      <h5>{fed.coName}</h5>
                    </div>
                  </div>
                  <div className="user-review d-flex justify-content-start">
                    <p className="">{fed.review}</p>
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
