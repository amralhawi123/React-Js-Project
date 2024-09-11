import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("Web Design");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsFading(!isFading);
  };

  return (
    <div className="about" id="About">
      <Container>
        <div className="title">
          <h6>About Us</h6>
          <h2>Know Us Better</h2>
        </div>
        <div className="content d-flex align-items-center justify-content-center gap-5">
          <Col lg={8} sm={12}>
            <div className="left">
              <div className="tabs">
                <button
                  className={activeTab === "Web Design" ? "active" : ""}
                  onClick={() => handleTabClick("Web Design")}>
                  Web Design
                </button>
                <button
                  className={activeTab === "Graphics" ? "active" : ""}
                  onClick={() => handleTabClick("Graphics")}>
                  Graphics
                </button>
                <button
                  className={activeTab === "Web Coding" ? "active" : ""}
                  onClick={() => handleTabClick("Web Coding")}>
                  Web Coding
                </button>
              </div>
              <div className="info">
                {activeTab === "Web Design" && (
                  <div className={`table-content ${isFading ? "active" : ""}`}>
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
                        <tr>
                          <td>Website Redesign</td>
                          <td>$1,500 to $2,200</td>
                          <td>2022 Dec 12</td>
                          <td>Web Biz</td>
                        </tr>
                        <tr>
                          <td>Website Renovation</td>
                          <td>$2,500 to $3,600</td>
                          <td>2022 Dec 10</td>
                          <td>Online Ads</td>
                        </tr>
                        <tr>
                          <td>Marketing Plan</td>
                          <td>$2,500 to $4,200</td>
                          <td>2022 Dec 8</td>
                          <td>Web Biz</td>
                        </tr>
                        <tr>
                          <td>All-new Website</td>
                          <td>$3,000 to $6,600</td>
                          <td>2022 Dec 2</td>
                          <td>Web Presence</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === "Graphics" && (
                  <div className={`table-content ${isFading ? "active" : ""}`}>
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
                        <tr>
                          <td>Graphics Redesign</td>
                          <td>$500 to $800</td>
                          <td>2022 Nov 24</td>
                          <td>Media One</td>
                        </tr>
                        <tr>
                          <td>Digital Graphics</td>
                          <td>$1,500 to $3,000</td>
                          <td>2022 Nov 18</td>
                          <td>Second Media</td>
                        </tr>
                        <tr>
                          <td>New Artworks</td>
                          <td>$2,200 to $4,400</td>
                          <td>2022 Nov 10</td>
                          <td>Artwork Push</td>
                        </tr>
                        <tr>
                          <td>Complex Arts</td>
                          <td>$1,100 to $2,400</td>
                          <td>2022 Nov 3</td>
                          <td>Media One</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === "Web Coding" && (
                  <div className={`table-content ${isFading ? "active" : ""}`}>
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
                        <tr>
                          <td>Backend Coding </td>
                          <td>$2,000 to $5,000</td>
                          <td>2022 Nov 28</td>
                          <td>PHP MySQL</td>
                        </tr>
                        <tr>
                          <td>New Web App</td>
                          <td>$1,500 to $3,000</td>
                          <td>2022 Nov 18</td>
                          <td> Python Programming</td>
                        </tr>
                        <tr>
                          <td>Frontend Interactions</td>
                          <td>$3,000 to $6,000</td>
                          <td>2022 Nov 10</td>
                          <td>JavaScripts</td>
                        </tr>
                        <tr>
                          <td>Video Creations</td>
                          <td>$1,100 to $2,400</td>
                          <td>2022 Nov 3</td>
                          <td>Multimedia</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="right">
              <h4 className="fw-bold">
                Please tell us about your idea and how you want it to be
              </h4>
              <p>
                You are allowed to use this template for your websites. You are{" "}
                <span>NOT allowed</span> to redistribute the template ZIP file
                on any other template websites.
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
        </div>
      </Container>
    </div>
  );
};

export default About;
