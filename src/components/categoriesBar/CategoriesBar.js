import React, { useState } from 'react';
import './_categoriesBar.scss';
//keywords content
import keywords from "../../keywords";
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
const CategoriesBar = () => {
    const [activeKeywordElement, setActiveElement] = useState('All');

    const dispatch = useDispatch();
    const handleClick = (value) => {
        setActiveElement(value);
        if (value === "ALL") {
            dispatch(getPopularVideos());
        } else {
            dispatch(getVideosByCategory(value));
        }
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((keyword, index) => {
                    return <span onClick={() => handleClick(keyword)}
                        key={index}
                        className={activeKeywordElement === keyword ? 'active' : ''}>{keyword}</span>
                })
            }
        </div>
    )
}

export default CategoriesBar