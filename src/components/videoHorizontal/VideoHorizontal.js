import React from 'react';
import "./_videoHorizontal.scss";
import { AiFillEye } from 'react-icons/ai';
import { useEffect } from 'react';
import request from '../../api';
import { useState } from 'react';
import moment from "moment";
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VideoHorizontal = ({ video, searchScreen, subscriptionScreen }) => {
    const { id, snippet: { channelId, channelTitle, description, title, publishedAt, thumbnails: { medium } }, resourceId } = video;
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    const seconds = moment.duration(duration).asSeconds();
    const videoDuration = moment.utc(seconds * 1000).format("mm:ss");
    const isVideo = !(id?.kind === "youtube#channel" || subscriptionScreen);//upon search, in the results if kind property has youtube#channel for channel and youtube#video for a video result
    const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel';
    const _channelId = resourceId?.channelId || channelId;

    // fetch video duration, view count: relatedVideos endpoint doesn't return contentDetails and statistics hence the following call
    useEffect(() => {
        const getVideoDetails = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId
                }
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        if (isVideo) {
            getVideoDetails();
        }
    }, [id, isVideo])

    // fetch channel icon
    useEffect(() => {
        const getChannelIcon = async () => {
            const { data: { items } } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        getChannelIcon();
    }, [channelId])

    const history = useNavigate();
    const handleClick = () => {
        isVideo ?
            history(`/watch/${id.videoId}`) : history(`/channel/${_channelId}`);
    }
    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center" onClick={handleClick}>
            <Col xs={6} md={searchScreen || subscriptionScreen ? 4 : 6} className="videoHorizontal__left">
                <LazyLoadImage src={medium.url} effect="blur" className={`videoHorizontal__thumbnail ${thumbnail}`} wrapperClassName="videoHorizontal__thumbnail-wrapper" />
                {isVideo &&
                    <span className="videoHorizontal__duration">{videoDuration}</span>
                }
            </Col>

            <Col xs={6} md={searchScreen || subscriptionScreen ? 8 : 6} className="videoHorizontal__right p-0">
                <p className="videoHorizontal__title mb-1">
                    {title}
                </p>

                {isVideo && (
                    <div className="videoHorizontal__details">
                        <AiFillEye />{numeral(views).format("0.a").toUpperCase()} views •{' '}
                        {moment(publishedAt).fromNow()}
                    </div>
                )}

                {(searchScreen || subscriptionScreen) && <p className="mt-1 videoHorizontal__desc">{description}</p>}

                <div className="videoHorizontal__channel d-flex align-items-center my-1">
                    {isVideo && (
                        <LazyLoadImage src={channelIcon?.url} effect="blur" />
                    )}

                    <p className="mb-0">{channelTitle}</p>

                    {(subscriptionScreen) &&
                        <p className="mt-2">{video.contentDetails.totalItemCount}{' '}Videos</p>
                    }
                </div>
            </Col>

        </Row>
    )
}

export default VideoHorizontal