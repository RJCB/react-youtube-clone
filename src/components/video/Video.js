import React from 'react';
import './_video.scss'
//icons
import { AiFillEye } from 'react-icons/ai';
const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/3N8fZF3hHEU/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAUrL8HJYTOvTl61cNN7RprVIcIHg" alt="" />
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create app in 5 min Create app in 5 min Create app in 5 min
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye />5m views •
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ujdgsuJtHymOieKLKZNr_UDX7DESVkHUq2f34Ukv0RltiJBpkIjXeIEZ_LXoUQF4_T8Jh9rzdQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Channel title</p>
            </div>
        </div>
    )
}

export default Video