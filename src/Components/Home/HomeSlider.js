import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgSlider1 from "../../imgs/slide-01.jpg";
import imgSlider2 from "../../imgs/slide-02.jpg";
import imgSlider3 from "../../imgs/slide-03.jpg";
import { Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <Carousel>
        <Carousel.Item>
          <img src={imgSlider1} alt="imgSlider1" />
          <Fade>
            <Carousel.Caption>
              <h1>
                Get <span>ready</span> for your business
                <br />
                &amp; upgrade <span>all aspects</span>
              </h1>
              <div className="line"></div>
              <p>
                Mexant HTML5 Template is provided for free of charge. This
                layout is based on Boostrap 5 CSS framework. Anyone can download
                and edit for any professional website. Thank you for visiting
                TemplateMo website.
              </p>
              <div className="buttons mt-4 d-flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button">
                  <Button variant="primary" size="lg">
                    Discover More
                  </Button>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button">
                  <Button variant="success" size="lg">
                    Contact Us
                  </Button>
                </motion.button>
              </div>
            </Carousel.Caption>
          </Fade>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgSlider2} alt="imgSlider1" />
          <Fade>
            <Carousel.Caption>
              <h1>
                <span>Digital</span> Currency for you
                <br />
                &amp; Best <span>Crypto</span> Tips
              </h1>
              <div className="line"></div>
              <p>
                You will see a bunch of free CSS templates when you search on
                Google. TemplateMo website is probably the best one because it
                is 100% free. It does not ask you anything in return. You have a
                total freedom to use any template for any purpose.
              </p>
              <div className="buttons mt-4 d-flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button">
                  <Button variant="primary" size="lg">
                    Discover More
                  </Button>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button">
                  <Button variant="success" size="lg">
                    Contact Us
                  </Button>
                </motion.button>
              </div>
            </Carousel.Caption>
          </Fade>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgSlider3} alt="imgSlider1" />
          <Fade>
            <Carousel.Caption>
              <h1>
                Best One in Town
                <br />
                &amp; Crypto <span>Services</span>
              </h1>
              <div className="line"></div>
              <p>
                When you browse through different tags on TemplateMo website,
                you can see a variety of CSS templates which are responsive
                website designs for different individual needs. Please tell your
                friends about our website. Thank you.
              </p>
              <div className="buttons mt-4 d-flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button">
                  <Button variant="primary" size="lg">
                    Discover More
                  </Button>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button">
                  <Button variant="success" size="lg">
                    Contact Us
                  </Button>
                </motion.button>
              </div>
            </Carousel.Caption>
          </Fade>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
