import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Main = () => {
    return (
        <Container className="content">
            <Row>
                <Col md={{ size: 3, order: 2 }}>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                </Col>
                <Col md={{ size: 9, order: 3 }}>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                    <div>world</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;