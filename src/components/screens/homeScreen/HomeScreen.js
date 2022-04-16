import React from 'react';
//bootstrap components
import { Container, Row, Col } from 'react-bootstrap';

import CategoriesBar from '../../categoriesBar/CategoriesBar';
import Video from '../../video/Video';

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    [...new Array(20)].map((value, index) => (
                        <Col key={index} lg={3} md={4}>
                            <Video />
                        </Col>))
                }
            </Row>
        </Container>
    )
}

export default HomeScreen