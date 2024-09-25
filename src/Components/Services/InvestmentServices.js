import React, { useState } from "react";
import { Container } from "react-bootstrap";
import investImage1 from "../../imgs/service-details-01.jpg";
import investImage2 from "../../imgs/service-details-02.jpg";
import investImage3 from "../../imgs/service-details-03.jpg";
import { Zoom } from "react-awesome-reveal";
const InvestmentServices = () => {
  const [activeTab, setActiveTab] = useState("Crypto Investments");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const tabs = {
    "Crypto Investments": [
      [
        <img src={investImage1} alt="service-image" />,
        "Learn more about cryptocurrency investments",
        "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
      ],
    ],
    "Cryptocurrency Market": [
      [
        <img src={investImage2} alt="service-image" />,
        "Read more on Cryptocurrency Market",
        "Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
      ],
    ],
    "Financial Planning": [
      [
        <img src={investImage3} alt="service-image" />,
        "How to carefully plan on your online financials",
        "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
      ],
    ],
  };

  return (
    <div className="investment-services">
      <Container>
        <div className="title">
          <h5>Investment in Details</h5>
          <h1>Upgrade your knowledge</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="tabs">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleClick(tab)}
                  className={activeTab === tab ? "active" : ""}>
                  {tab}
                </button>
              ))}
            </div>
            <Zoom key={activeTab}>
              {tabs[activeTab].map(
                ([imag, title, desc, span1, span2, span3], index) => (
                  <div className="box " key={index}>
                    <div className="image">{imag}</div>
                    <div class="right-content">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                      <span>{span1}</span>
                      <span>{span2}</span>
                      <span class="last-span">{span3}</span>
                    </div>
                  </div>
                )
              )}
            </Zoom>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvestmentServices;
