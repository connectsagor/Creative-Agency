import React from "react";
import Header from "../Header/Header";
import Brand from "../Brand/Brand";
import Services from "../Services/Services";
import Carousel from "../Carousel/Carousel";
import Feedback from "../Feedback/Feedback";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <>
      <Header />
      <Brand />
      <Services />
      <Carousel />
      <Feedback />
      <ContactForm />
    </>
  );
};

export default Home;
