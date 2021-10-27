import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navStyle"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          <div className="logo">ASA International</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className="navPadding">
              <Nav.Link href as={Link} to="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navPadding">
              <Nav.Link
                href
                as={Link}
                to="/sanction-type-list"
                style={{ color: "white" }}
              >
                Sanction List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navPadding">
              <Nav.Link
                href
                as={Link}
                to="/bulk-sanction"
                style={{ color: "white" }}
              >
                Bulk Sanction Upload
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
