import React, { useEffect } from 'react';
//bootstrap components
import { Container, Col } from 'react-bootstrap';
import "./_homeScreen.scss";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videos.action';

import CategoriesBar from '../../categoriesBar/CategoriesBar';
import Video from '../../video/Video';
//infinite scroll component
import InfiniteScroll from 'react-infinite-scroll-component';
//custom Skeleton component
import SkeletonVideo from '../../skeletons/SkeletonVideo';

const HomeScreen = () => {
    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch]);

    const fetchData = () => {
        if (activeCategory === "ALL") {
            dispatch(getPopularVideos());
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    console.log(videos);
    return (
        <Container>
            <CategoriesBar />
            {/* we can pass html/components into infinite scroll component */}
            <div>
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<div className="spinner-border text-danger d-block mx-auto"></div>}
                >
                    {!loading ?
                        videos.map((video, index) => (
                            <Col key={index} lg={3} md={4}>
                                <Video key={video.id} video={video} />
                            </Col>))
                        : [...Array(20)].map((value, index) => <Col lg={3} md={4} key={index}>
                            <SkeletonVideo />
                        </Col>)}
                </InfiniteScroll></div>
        </Container>
    )
}

export default HomeScreen