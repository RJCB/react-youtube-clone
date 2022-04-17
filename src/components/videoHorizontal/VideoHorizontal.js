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

const VideoHorizontal = () => {
    const seconds = moment.duration('10000').asSeconds();
    const videoDuration = moment.utc(seconds * 1000).format("mm:ss");
    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center">
            <Col xs={6} md={4} className="videoHorizontal__left">
                <LazyLoadImage src="https://imgs.search.brave.com/Zw9av1oesrF4TuTm0hGVhIzATd4kIeUALOcui5OSlAA/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24vY29v/bC1hdmF0YXItaWNv/bnMtNjEucG5n" effect="blur" className="videoHorizontal__thumbnail rounded-circle" wrapperClassName="videoHorizontal__thumbnail-wrapper" />
                <span className="video__top__duration">{videoDuration}</span>
            </Col>
            <Col xs={6} md={8} className="videoHorizontal__right p-0">
                <p className="videoHorizontal__title mb-1">
                    This is a video title
                </p>
                <div className="videoHorizontal__details">
                    <AiFillEye />{numeral('1000').format("0.a")} views •{' '}
                    {moment('2022-01-01').fromNow()}
                </div>
                <div className="videoHorizontal__channel d-flex align-items-center my-1">
                    {/* <LazyLoadImage src="https://imgs.search.brave.com/Zw9av1oesrF4TuTm0hGVhIzATd4kIeUALOcui5OSlAA/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24vY29v/bC1hdmF0YXItaWNv/bnMtNjEucG5n" effect="blur"/>
                    <span className="video__top__duration">{videoDuration}</span> */}
                    <p>Cadaber</p>
                </div>
            </Col>

        </Row>
    )
}

export default VideoHorizontal