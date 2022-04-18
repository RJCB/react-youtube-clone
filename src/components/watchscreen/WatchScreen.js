import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from '../videoMetaData/VideoMetaData';
import VideoHorizontal from '../videoHorizontal/VideoHorizontal';
import Comments from '../comments/Comments';
import { useParams } from 'react-router-dom';
import "./_watchscreen.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById, getRelatedVideos } from '../../redux/actions/videos.action';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WatchScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById(id));
        dispatch(getRelatedVideos(id));
    }, [dispatch, id]);

    const { video, loading } = useSelector(state => state.selectedVideo);
    const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideos);

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe id="player" type="text/html" width="100%" height="100%"
                        src={`http://www.youtube.com/embed/${id}`}
                        frameBorder="0" title={video?.snippet?.title} allowFullScreen />
                </div>
                {!loading ? <VideoMetaData video={video} videoId={id} /> : <h6>Loading...</h6>}
                <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>
            <Col lg={4}>
                {/* some of the videos don't have snippet and that throws an error, so filtering videos that have snippet and further map through them */}
                {
                    !relatedVideosLoading ? videos?.filter(video => video.snippet).map((video) =>
                        <VideoHorizontal video={video} key={video.id.videoId} />)
                        :
                        <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147" >
                            <Skeleton
                                width="100%"
                                height="130px"
                                count={15} />
                        </SkeletonTheme>
                }
            </Col>
        </Row>
    )
}

export default WatchScreen