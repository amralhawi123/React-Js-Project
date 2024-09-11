import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../imgs/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const NavBar = () => {
  const location = useLocation();

  const isPagesRoute = location.pathname.includes("/pages");
  const isHomeRoute =
    location.pathname === "/" || location.pathname === "#Home";

  return (
    <div
      className="navBar p-2 "
      id="navBar"
      style={{ backgroundColor: "#212741" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <img alt="logo" src={logo} style={{ width: "150px" }} />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link href="#Home" className={isHomeRoute ? "active" : ""}>
                Home
              </Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <Link to="/pages/about">About Us</Link>
                <NavDropdown.Divider />
                <Link to="/pages/services">Our Services</Link>
              </NavDropdown>
              <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
            </Nav>
            <Link to="/contact">
              <motion.button
                whileTap={{ scale: 0.85 }}
                className="motion-button">
                <Button variant="success">Contact Us</Button>
              </motion.button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
