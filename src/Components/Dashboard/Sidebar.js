import React from 'react'
import { Link } from 'react-router-dom'
import { Button,ListGroup, ListGroupItem  } from 'reactstrap';
import {AiOutlineClose} from 'react-icons/ai'


export default function Sidebar(props) {
    return (
        <div className="sidebar " id="sidebar">
            <Button color="link" size="lg" onClick={props.toggleSidebar}><AiOutlineClose className="text-danger" /></Button>
            <div className="container">
                <h2 className="logo text-muted">PHYSICS.<span class="text-success">edunomics</span></h2>
            </div>
            <div className="w-100 mt-5">
            <ListGroup flush>
                <ListGroupItem active tag="a" href="#" action>HOME</ListGroupItem>
                <ListGroupItem tag="a" href="" action>SESSIONS</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>DOWNLOADS</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>SETTINGS</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#" action>ABOUT</ListGroupItem>
            </ListGroup>
            </div>
        </div>
    )
}
