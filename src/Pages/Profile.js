import React from "react";
import { Container, Row, Col } from 'reactstrap';

import { Route, Switch, BrowserRouter } from "react-router-dom";
import {  ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from "react-router-dom";



const Profile = () => {
  
    return(
     
      <>
      
      <Container fluid className="test-profile">
             <Row >
               <Col  md={2}>
               <ListGroup>
      <Link className="list-group-item list-group-item-action" to="/login" action><i class="fas fa-house-user"></i> Home</Link>
      <Link className="list-group-item list-group-item-action" to="/login" action><i class="fas fa-user-cog"></i> Edit Profile</Link>
      <Link className="list-group-item list-group-item-action" to="/demo" action><i class="fas fa-video"></i> Demo</Link>
      <Link className="list-group-item list-group-item-action" to="/login" action><i class="fas fa-th-list"></i> Dashboard</Link>
      <Link className="list-group-item list-group-item-action" to="/login" action><i class="fas fa-money-check-alt"></i> Request Plan</Link>
      <Link className="list-group-item list-group-item-action" to="/login" action><i class="fas fa-comments"></i> Reviews</Link>
     
     </ListGroup>

               </Col>
               <Col md={10}>
              
              

               </Col>
               

             </Row>
           </Container >  

         
        

      

      </>   
        
    );
};

    export default Profile;