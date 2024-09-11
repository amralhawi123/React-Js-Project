import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const StepsAbout = () => {
  return (
    <div className="steps-about">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="right">
              <h4 className="fw-bold">
                Please tell us about your idea and how you want it to bePlease
                tell us about your idea and how you want it to be
              </h4>
              <p>
                If you need more HTML templates, you can try visiting TooCSS
                blog and Tooplate websites. You can get many good templates on
                those websites.
                <br />
                <br />
                Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Morbi sed dolor condimentum tellus commodo volutpat non
                malesuada turpis.
              </p>
              <motion.button
                whileTap={{ scale: 0.85 }}
                className="motion-button mt-4">
                <Button variant="primary" size="lg">
                  Discover More
                </Button>
              </motion.button>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <div class="item">
                  <span>01</span>
                  <h4>First Step</h4>
                  <p>
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div class="item">
                  <span>02</span>
                  <h4>Second Step</h4>
                  <p>
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div class="item">
                  <span>03</span>
                  <h4>Third Step</h4>
                  <p>
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div class="item">
                  <span>04</span>
                  <h4>Fourth Step</h4>
                  <p>
                    Pellentesque ipsum elit, congue a sapien laoreet,
                    pellentesque ultricies risus.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StepsAbout;
