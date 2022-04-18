import React from 'react';
import './_video.scss'
//icons
import { AiFillEye } from 'react-icons/ai';
import { useEffect } from 'react';
import request from '../../api';
import { useState } from 'react';
import moment from "moment";
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const Video = ({ video }) => {
    console.log(video, "video");
    const { id, snippet: { channelId, channelTitle, title, publishedAt, thumbnails: { medium } }, contentDetails: { duration }, statistics: { viewCount } } = video;
    // const [views, setViews] = useState(null);
    // const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    const seconds = moment.duration(duration).asSeconds();
    const videoDuration = moment.utc(seconds * 1000).format("mm:ss");
    const _videoId = id?.videoId || id;//check if id is an object if so, return id.videoId or just id as is. Reason is when we fetch category based videos the response an object for id 
    const history = useNavigate();
    // fetch video duration, view count
    // useEffect(() => {
    //     const getVideoDetails = async () => {
    //         const { data: { items } } = await request('/videos', {
    //             params: {
    //                 part: 'contentDetails,statistics',
    //                 id: _videoId
    //             }
    //         })
    //         setDuration(items[0].contentDetails.duration);
    //         setViews(items[0].statistics.viewCount);
    //     }
    //     getVideoDetails();
    // }, [_videoId])

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

    const handleVideoClick = () => {
        history(`/watch/${_videoId}`);
    }
    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video__top">
                {/* <img src={medium.url} alt="" /> */}
                <LazyLoadImage src={medium.url} effect="blur" />
                <span className="video__top__duration">{videoDuration}</span>
            </div>
            <div className="video__title">
                {title}
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye />{numeral(viewCount).format("0.a").toUpperCase()} views •{' '}
                </span>
                <span>{moment(publishedAt).fromNow()}</span>
            </div>
            <div className="video__channel">
                {/* <img src={channelIcon?.url} alt={channelTitle} /> */}
                <LazyLoadImage src={channelIcon?.url} alt={channelTitle} effect="blur" />
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}

export default Video