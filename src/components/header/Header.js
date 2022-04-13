/**
 * This is the Header component. This includes logo, search bar, few other icons
*/
import React from 'react';
import './_header.scss';

//react-icons
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header">
            <FaBars className="header__menu" size={26} onClick={handleToggleSidebar} />
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header__logo" />
            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://imgs.search.brave.com/Zw9av1oesrF4TuTm0hGVhIzATd4kIeUALOcui5OSlAA/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24vY29v/bC1hdmF0YXItaWNv/bnMtNjEucG5n" alt="avatar" />
            </div>
        </div>
    )
}

export default Header