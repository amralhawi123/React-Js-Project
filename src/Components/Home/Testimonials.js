import React from "react";
import Slider from "react-slick";
import test from "../../imgs/testimonials-01.jpg";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="testimonials" id="Testimonials">
      <Container>
        <div className="title">
          <h6>Testimonials</h6>
          <h2>What They Say?</h2>
        </div>
        <div className="content">
          <Slider {...settings}>
            <div className="items">
              <div className="info p-y px-5">
                <i class="fa fa-quote-left"></i>
                <p>
                  “Donec et nunc massa. Nullam non felis dignissim, dapibus
                  turpis semper, vulputate lorem. Nam volutpat posuere tellus,
                  in porttitor justo interdum nec. Aenean in dapibus risus, in
                  euismod ligula. Aliquam vel scelerisque elit.”
                </p>
                <h4>David Eigenberg</h4>
                <span>CEO of Mexant</span>
              </div>
              <div class="right-image">
                <img src={test} alt="testimonials" />
              </div>
            </div>
            <div className="items">
              <div className="p-3">
                <i class="fa fa-quote-left"></i>
                <p>
                  “Donec et nunc massa. Nullam non felis dignissim, dapibus
                  turpis semper, vulputate lorem. Nam volutpat posuere tellus,
                  in porttitor justo interdum nec. Aenean in dapibus risus, in
                  euismod ligula. Aliquam vel scelerisque elit.”
                </p>
                <h4>David Eigenberg</h4>
                <span>CEO of Mexant</span>
              </div>
              <div class="right-image">
                <img src={test} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
