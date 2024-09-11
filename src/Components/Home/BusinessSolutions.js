import React from "react";
import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";

const BusinessSolutions = () => {
  return (
    <div className=" businessSolutions">
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          <h1>
            Business <span>Solutions </span>and
            <br />
            <span>Crypto</span> Investments
          </h1>
        </div>
        <div className="buttons d-flex gap-2">
          <motion.button whileTap={{ scale: 0.85 }} className="motion-button">
            <Button variant="primary" size="lg">
              Discover More
            </Button>
          </motion.button>
          <motion.button whileTap={{ scale: 0.85 }} className="motion-button">
            <Button variant="success" size="lg">
              Contact Us
            </Button>
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default BusinessSolutions;
