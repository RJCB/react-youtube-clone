import React, { useEffect } from 'react';
//bootstrap components
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getPopularVideos } from '../../../redux/actions/videos.action';

import CategoriesBar from '../../categoriesBar/CategoriesBar';
import Video from '../../video/Video';

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch]);

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