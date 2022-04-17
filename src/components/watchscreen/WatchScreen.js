import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from '../videoMetaData/VideoMetaData';
import VideoHorizontal from '../videoHorizontal/VideoHorizontal';
import "./_watchscreen.scss";

const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe id="player" type="text/html" width="100%" height="100%"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0" title="Video" allowFullScreen></iframe>
                </div>
                <VideoMetaData />
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