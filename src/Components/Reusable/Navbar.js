import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarMain = (props) => {    

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Navbar  expand="md" dark color="dark" >
        <NavbarBrand href="/">Welcome to Edunomics</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
          <Link className="rounded-pill py-1 px-4 text-white border mr-2" to="/signup">  Signup</Link>
          <Link className="rounded-pill py-1 px-4 text-white border ml-2"  to="/login">Login</Link>

          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
