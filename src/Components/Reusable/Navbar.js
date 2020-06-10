import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';



import { Link } from 'react-router-dom';

const NavbarMain = (props) => {

  const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);
  
    
  

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Navbar  expand="md" dark color="dark" fixed="top">
        
        
        {/* modal code */}
        <Modal isOpen={modal} toggle={toggleModal} backdrop={true}>
          <Form>
          <ModalHeader toggle={toggleModal}>LOGIN</ModalHeader>
          <ModalBody>
          <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModal}>LOGIN</Button>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
    
        
        
        
        
        <NavbarBrand href="/">Welcome to Edunomics</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
          <Link className="rounded-pill py-1 px-4 text-white border mr-2" to="/signup">  Signup</Link>
          <Link className="rounded-pill py-1 px-4 text-white border ml-2"  onClick={toggleModal}>Login</Link>

          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
