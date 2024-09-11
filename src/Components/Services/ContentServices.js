import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceImage1 from "../../imgs/service-image-01.jpg";
import serviceImage2 from "../../imgs/service-image-02.jpg";
import serviceImage3 from "../../imgs/service-image-03.jpg";
import { motion } from "framer-motion";

const ContentServices = () => {
  return (
    <div className="content-services">
      <Container>
        <Row>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.85,
                },
              }}
              viewport={{ once: true }}>
              <div className="image">
                <img src={serviceImage1} alt="services-image" />
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.85,
                },
              }}
              viewport={{ once: true }}>
              <div class="right-text-content">
                <i class="fas fa-archive"></i>
                <h4>Digital Currencies</h4>
                <p>
                  You will see a bunch of free CSS templates when you search on
                  Google. TemplateMo is the best one because it is 100% free for
                  anyone. We do not ask you anything in return. You are free to
                  use our templates for any purpose.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.85,
                },
              }}
              viewport={{ once: true }}>
              <div class="right-text-content">
                <i class="fas fa-archive"></i>
                <h4>Financial Solutions</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  et ex massa. In ac laoreet urna. Curabitur eu enim nibh.
                  Phasellus sodales nisi vel leo aliquam, ut tempus augue
                  hendrerit. Pellentesque eu risus tincidunt, condimentum eros
                  in, auctor augue. Vivamus et urna blandit, varius sapien sed.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.85,
                },
              }}
              viewport={{ once: true }}>
              <div className="image">
                <img src={serviceImage2} alt="services-image" />
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.85,
                },
              }}
              viewport={{ once: true }}>
              <div className="image">
                <img src={serviceImage3} alt="services-image" />
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{
                opacity: 0,
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.85,
                },
              }}
              viewport={{ once: true }}>
              <div class="right-text-content">
                <i class="fas fa-archive"></i>
                <h4>Cryptocurrency Exchanges</h4>
                <p>
                  Mauris id efficitur ante, vitae ultrices metus. Donec et nunc
                  massa. Nullam non felis dignissim, dapibus turpis semper,
                  vulputate lorem. Nam volutpat posuere tellus, in porttitor
                  justo interdum nec. Aenean in dapibus risus, in euismod
                  ligula. Aliquam vel scelerisque elit.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentServices;
