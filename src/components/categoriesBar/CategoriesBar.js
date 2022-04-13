import React, { useState } from 'react';
import './_categoriesBar.scss';
//keywords content
import keywords from "../../keywords";
const CategoriesBar = () => {
    const [activeKeywordElement, setActiveElement] = useState('All');
    const handleClick = (value) => {
        setActiveElement(value);
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