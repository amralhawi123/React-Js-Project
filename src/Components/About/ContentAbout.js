import React from "react";
import imageAbout from "../../imgs/coffee-1283672_1920-fotor-2024091019910.png";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";

const ContentAbout = () => {
  return (
    <div className="content-About">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={imageAbout} alt="image" />
          </Col>
          <Col lg={6}>
            <div className="content">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Mexant Financial Planning</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      You will see a bunch of free CSS templates when you search
                      on Google. TemplateMo website is probably the best one
                      because it is 100% free.
                      <br />
                      <br />
                      We do not ask you anything in return. You are free to use
                      our templates for any purpose.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Mexant Crypto Investing</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Mexant HTML5 Template is available to download 100% free
                      of charge. This CSS layout is based on Boostrap 5
                      framework.
                      <br />
                      <br />
                      Anyone can edit and use this layout for all professional
                      websites. Thank you for visiting TemplateMo website.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Cryptocurrency Investments
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Ut dictum vehicula massa, ac pharetra leo tincidunt eu.
                      Phasellus in tristique magna, ac gravida leo.
                      <br />
                      <br />
                      Integer sed lorem sapien. Ut viverra mauris sed lobortis
                      commodo. Mauris scelerisque venenatis justo, sed interdum
                      sem.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentAbout;
