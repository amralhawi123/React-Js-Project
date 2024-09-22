import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
  const [activeTab, setActiveTab] = useState("Web Design");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = {
    "Web Design": [
      ["Website Redesign", "$1,500 to $2,200", "2022 Dec 12", "Web Biz"],
      ["Website Renovation", "$2,500 to $3,600", "2022 Dec 10", "Online Ads"],
      ["Marketing Plan", "$2,500 to $4,200", "2022 Dec 8", "Web Biz"],
      ["All-new Website", "$3,000 to $6,600", "2022 Dec 2", "Web Presence"],
    ],
    "Graphic Design": [
      ["Graphics Redesign", "$500 to $800", "2022 Nov 24", "Media One"],
      ["Digital Graphics", "$1,500 to $3,000", "2022 Nov 18", "Second Media"],
      ["New Artworks", "$2,200 to $4,400", "2022 Nov 10", "Artwork Push"],
      ["Complex Arts", "$1,100 to $2,400", "2022 Nov 3", "Media One"],
    ],
    "Web Coding": [
      ["Backend Coding", "$2,000 to $5,000", "2022 Nov 28", "PHP MySQL"],
      ["New Web App", "$1,500 to $3,000", "2022 Nov 18", "Python Programming"],
      [
        "Frontend Interactions",
        "$3,000 to $6,000",
        "2022 Nov 10",
        "JavaScripts",
      ],
      ["Video Creations", "$1,100 to $2,400", "2022 Nov 3", "Multimedia"],
    ],
  };

  return (
    <div className="about" id="About">
      <Container>
        <div className="title">
          <h6>About Us</h6>
          <h2>Know Us Better</h2>
        </div>
        <div className="content">
          <Row>
            <Col lg={8} sm={12}>
              <div className="left">
                <div className="tabs">
                  {Object.keys(tabs).map((tab) => (
                    <button
                      key={tab}
                      className={activeTab === tab ? "active" : ""}
                      onClick={() => handleTabClick(tab)}>
                      {tab}
                    </button>
                  ))}
                </div>
                <Zoom key={activeTab}>
                  <div className="table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Budget</th>
                          <th>Deadline</th>
                          <th>Client</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tabs[activeTab].map(
                          ([title, budget, deadline, client], index) => (
                            <tr key={index}>
                              <td>{title}</td>
                              <td>{budget}</td>
                              <td>{deadline}</td>
                              <td>{client}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </Zoom>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="right">
                <h4 className="fw-bold">
                  Please tell us about your idea and how you want it to be
                </h4>
                <p>
                  You are allowed to use this template for your websites. You
                  are <span>NOT allowed</span> to redistribute the template ZIP
                  file on any other template websites.
                </p>
                <p>
                  Thank you for downloading and using our templates. Please tell
                  your friends about our website.
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
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
