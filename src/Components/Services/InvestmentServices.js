import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import investImage1 from "../../imgs/service-details-01.jpg";
import investImage2 from "../../imgs/service-details-02.jpg";
import investImage3 from "../../imgs/service-details-03.jpg";
const InvestmentServices = () => {
  const [activeTab, setActiveTab] = useState("Crypto Investments");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsFading(!isFading);
  };

  return (
    <div className="investment-services">
      <Container>
        <div className="title">
          <h5>Investment in Details</h5>
          <h1>Upgrade your knowledge</h1>
        </div>
        <div className="content">
          <div className="tabs">
            <button
              className={activeTab === "Crypto Investments" ? "active" : ""}
              onClick={() => handleTabClick("Crypto Investments")}>
              Crypto Investments
            </button>
            <button
              className={activeTab === "Cryptocurrency Market" ? "active" : ""}
              onClick={() => handleTabClick("Cryptocurrency Market")}>
              Cryptocurrency Market
            </button>
            <button
              className={activeTab === " Financial Planning" ? "active" : ""}
              onClick={() => handleTabClick(" Financial Planning")}>
              Financial Planning
            </button>
          </div>
          <div className="info">
            {activeTab === "Crypto Investments" && (
              <div className={`table-content ${isFading ? "active" : ""}`}>
                <div className="box">
                  <div className="image">
                    <img src={investImage1} alt="serives-image" />
                  </div>
                  <div class="right-content">
                    <h4>Learn more about cryptocurrency investments</h4>
                    <p>
                      Etiam id ligula risus. Fusce fringilla nisl nunc, nec
                      rutrum lectus cursus nec. In blandit nibh dolor, at rutrum
                      leo accumsan porta. Nullam pulvinar eros porttitor risus
                      condimentum tempus.
                    </p>
                    <span>- Top Crypto prices and charts</span>
                    <span>- Is Cryptocurrency a good investment?</span>
                    <span class="last-span">
                      - Crypto Market Insiders and News
                    </span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Cryptocurrency Market" && (
              <div className={`table-content ${isFading ? "active" : ""}`}>
                <div className="box">
                  <div className="image">
                    <img src={investImage2} alt="serives-image" />
                  </div>
                  <div class="right-content">
                    <h4>Read more on Cryptocurrency Market</h4>
                    <p>
                      Fusce fringilla nisl nunc, nec rutrum lectus cursus nec.
                      In blandit nibh dolor, at rutrum leo accumsan porta.
                      Nullam pulvinar eros porttitor risus condimentum tempus.
                    </p>
                    <span>- Top Crypto prices and charts</span>
                    <span>- Is Cryptocurrency a good investment?</span>
                    <span class="last-span">
                      - Crypto Market Insiders and News
                    </span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === " Financial Planning" && (
              <div className={`table-content ${isFading ? "active" : ""}`}>
                <div className="box">
                  <div className="image">
                    <img src={investImage3} alt="serives-image" />
                  </div>
                  <div class="right-content">
                    <h4>How to carefully plan on your online financials</h4>
                    <p>
                      Fusce fringilla nisl nunc, nec rutrum lectus cursus nec.
                      In blandit nibh dolor, at rutrum leo accumsan porta.
                      Nullam pulvinar eros porttitor risus condimentum tempus.
                    </p>
                    <span>- Top Crypto prices and charts</span>
                    <span>- Is Cryptocurrency a good investment?</span>
                    <span class="last-span">
                      - Crypto Market Insiders and News
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvestmentServices;
