import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md" className="bg-transparent" fixed="top">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
          <Link className="rounded-pill py-1 px-4 text-white border">Signup</Link>
          <Link className="rounded-pill py-1 px-4 text-white border">Login</Link>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
