import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className="row w-100 ">
            <div className="col-lg-8 col-sm-12">
                <img src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img-fluid" alt="Login" />
            </div>
            <div className="col-lg-4 col-sm-12 pt-5">
                <h1>Login</h1>
            <Form className="mt-5">
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>Email</Label>
        <Col sm={9}>
          <Input type="email" name="email" id="exampleEmail"  />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={3}>Password</Label>
        <Col sm={9}>
          <Input type="password" name="password" id="examplePassword" />
        </Col>
      </FormGroup>
      <div className="text-center mt-5">
      <Button outline type="submit" color="success" block>Login</Button>
      <p className="my-3">New here ?</p>
      <Button  color="primary" block><Link to="/signup" className="text-white">Register Now!</Link></Button>
      </div>
      </Form>
            </div>
        </div>
    )
}
