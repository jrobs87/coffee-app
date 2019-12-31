// React DOM + React Router + React Transition Group
import React, { Component } from 'react';

// React Libraries (React Bootstrap, Slick Carouesl, Etc.)
import { Container, Row, Col } from 'react-bootstrap';

// CSS Imports + External Libraries
import './index.css';

// Component Code
class Route_404 extends Component {
    constructor(props) {
        // Required to use this keyword
        super(props);
        this.state = {
            data: false
        }
        // Method Definitions for Constructor Function
        // Binds Component Methods to the Constructor Methods so State can be updated from UI
        this.toggleActive = this.toggleActive.bind(this);
    }

    // Define Methods for Component
    toggleActive = function () {
        this.setState(({
            data: !this.state.active
        }))
    }

    // Render is the only required Component method
    render() {
        return (
            <div className="page-wrapper">
                   <div className="page-content">
                    <Container>
                        <Row>
                            <Col>
                                <p>Hi!  I am a 404 route!</p>
                             </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Route_404