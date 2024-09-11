import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import Services from "../Components/Home/Services";
import BusinessSolutions from "../Components/Home/BusinessSolutions";
import About from "../Components/Home/About";
import Testimonials from "../Components/Home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <section id="Home">
        <HomeSlider id="home" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <BusinessSolutions />
      <section id="About">
        <About />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default HomePage;
