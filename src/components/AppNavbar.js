import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const AppNavbar = () => (
  <Navbar color="dark" dark expand="sm" className="mb-3">
    <Container>
      <NavbarBrand href="/">
Contacts
      </NavbarBrand>
    </Container>
  </Navbar>
);

export default AppNavbar;
