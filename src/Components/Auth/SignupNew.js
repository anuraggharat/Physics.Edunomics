import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText,FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SignupNew() {
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-lg-9">
                    <div className="signup-bgnew"></div>
                </div>            
            </div>
            
            <div className="signup-card px-5 pt-3 shadow-lg " >
                <h4 className="text-center my-3 ">Register</h4>
                <Form className="w-100 text-white">

<FormGroup row>
    <Label for="username" sm={2} lg={3}>Username</Label>
<Col sm={10} lg={9} >
<Input   type="text" name="username" id="username" required />
{/* <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback> */}
</Col>
</FormGroup>

<FormGroup row>
    <Label for="email" sm={2} lg={3}>Email</Label>
<Col sm={10} lg={9} >
<Input type="email" name="email" id="email"  required />
</Col>
</FormGroup>


<FormGroup row>
    <Label for="fullname" sm={2} lg={3}>Full Name</Label>
<Col sm={10} lg={9} >
<Input type="text" name="fullname" id="fullname"  required/>
</Col>
</FormGroup>


<FormGroup row>
    <Label for="password" sm={2} lg={3}>Email</Label>
    <Col sm={10} lg={9} >
        <Input type="password" name="password" id="password" />
    </Col>
</FormGroup>

<FormGroup row>
    <Label for="phonenumber" sm={2} lg={3}>Phone</Label>
    <Col sm={10} lg={9} >
        <Input type="number" name="phonenumber" id="phonenumber"  />
    </Col>
</FormGroup>

<Button type="submit" size="lg" block color="success">SIGN UP</Button>
<p className="text-center mt-2">OR</p>
<Button type="button" size="lg" block color="primary"><Link className="text-white" to="/login">Already a user? Login?</Link></Button>
<p className="text-center  mt-2" ><Link to="/" className="text-white"> Go Back</Link></p>


</Form>

                </div>

        </div>
    )
}