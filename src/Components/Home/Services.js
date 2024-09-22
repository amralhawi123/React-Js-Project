import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div data-to-scrollspy-id="Services" className="services">
      <Container>
        <div className="title">
          <h5>Services</h5>
          <h2>Discover More Services</h2>
        </div>
        <Row>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
              <div class="service-item">
                <i class="fa-solid fa-box-archive"></i>
                <h4>CSS Templates</h4>
                <p>
                  TemplateMo website is the best for you to explore and download
                  free website templates.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
              <div class="service-item">
                <i class="fas fa-cloud"></i>
                <h4>HTML5 Web Pages</h4>
                <p>
                  Templates are based on Bootstrap 5 CSS framework. You can
                  easily adapt or modify based on your needs.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 3 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.5, // Animation duration
                },
              }}
              viewport={{ once: true }}>
              <div class="service-item">
                <i class="fas fa-charging-station"></i>
                <h4>Responsive Designs</h4>
                <p>
                  All of our CSS templates are 100% free to use for commercial
                  or business websites.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 4 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.5, // Animation duration
                },
              }}
              viewport={{ once: true }}>
              <div class="service-item">
                <i class="fas fa-suitcase"></i>
                <h4>Mobile and Tablet ready!</h4>
                <p>
                  Our HTML CSS templates are well-tested on mobile, tablet, and
                  desktop compatibility.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 5 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.25, // Animation duration
                },
              }}
              viewport={{ once: true }}>
              <div class="service-item">
                <i class="fas fa-archway"></i>
                <h4>Fast Customer Support</h4>
                <p>
                  Do not be hesitated to contact us if you have any question or
                  concern about our templates.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 6 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.25, // Animation duration
                },
              }}
              viewport={{ once: true }}>
              <div class="service-item">
                <i class="fas fa-puzzle-piece"></i>
                <h4>Fully Customizable</h4>
                <p>
                  If you have any idea or suggestion about new templates, feel
                  free to let us know.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
