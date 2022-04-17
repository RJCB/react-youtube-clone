import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from '../videoMetaData/VideoMetaData';
import VideoHorizontal from '../videoHorizontal/VideoHorizontal';
import Comments from '../comments/Comments';
import { useParams } from 'react-router-dom';
import "./_watchscreen.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById } from '../../redux/actions/videos.action';

const WatchScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById(id));
    }, [dispatch, id]);

    const { video, loading } = useSelector(state => state.selectedVideo)

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe id="player" type="text/html" width="100%" height="100%"
                        src={`http://www.youtube.com/embed/${id}`}
                        frameBorder="0" title={video?.snippet?.title} allowFullScreen />
                </div>
                {!loading ? <VideoMetaData video={video} videoId={id} /> : <h6>Loading...</h6>}
                <Comments />
            </Col>
            <Col lg={4}>
                {
                    [...Array(10)].map(() => <VideoHorizontal />)
                }
            </Col>
        </Row>
    )
}

export default WatchScreen