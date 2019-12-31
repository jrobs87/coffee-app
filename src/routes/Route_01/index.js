import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './index.css';

function RouteOne() {
    return (
        <div className="page-wrapper profile">
            <div className="page-content">
            <Container fluid style={{ height: "33vh", width: "66vw", background: "none", padding: "1rem"}}>
          <Row>
            <Col sm={12} med={12} lg={12}>
              <h3 style={{ fontSize: "3rem" }}>Well, hello there. <br /> I am a web developer.</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={12} med={12} lg={12}>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <NavLink to="/route-1" style={{ display: 'block', marginBottom: '10rem'}}>
                <Button variant="dark">Hello World</Button>
              </NavLink>
              
            </Col>
          </Row>
        </Container>
            </div>
        </div>
    )
}

export default RouteOne

