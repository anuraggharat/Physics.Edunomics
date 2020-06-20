import React from 'react'
import CardImage from './CardImage'
import Sessions from '../../Assets/Images/interactive.png'
import Questions from '../../Assets/Images/questions.png'
import Download from '../../Assets/Images/download.png'
import Practice from '../../Assets/Images/practicequestions.png'
import {
    Card, CardHeader, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { ListGroup, ListGroupItem } from 'reactstrap';


export default function MainContent() {
    return (
        <div className="content p-5">
            <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12  px-5 mb-4">
                    <CardImage 
                    image={Sessions}
                    title="Interactive Sessions"
                    />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12   px-5 mb-4">
                <CardImage 
                    image={Questions}
                    title="Ask Questions"
                    />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12   px-5 mb-4">
                    <CardImage 
                    image={Download}
                    title="Paper Downloads"
                    />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12   px-5 mb-4">
                <CardImage 
                    image={Practice}
                    title="Practice Questions"
                    />
                </div>
                
            </div>
            <div className="row mt-3">
                <div className="col-lg-6 col-sm-12">
                <Card>
                <CardHeader>Topics Covered</CardHeader>
                <CardBody className="p-0">
                <ListGroup flush>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                </CardBody>
                </Card>
                </div>
                <div className="col-lg-6 col-sm-12">
                <Card>
                <CardHeader>Recent Activities</CardHeader>
                <CardBody className="p-0">
                <ListGroup flush>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                </CardBody>
                </Card>
                </div>
                <div className="col-lg-12 mt-5">
                <Card>
                <CardHeader>Performance</CardHeader>
                <CardBody className="p-0">
                <ListGroup flush>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                </CardBody>
                </Card>
                </div>
            </div>

        </div>
    )
}
