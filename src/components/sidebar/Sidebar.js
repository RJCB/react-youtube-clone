/**
 * This is the Sidebar component. This is shown on medium and large width by default and only shown upon clicking hamburger menu in small width
*/
import React from 'react';
import './_sidebar.scss';
//icons
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/auth.action';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logOut());
    }

    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={handleToggleSidebar}>
            <ul>
                <Link to='/'>
                    <li>
                        <MdHome size={23} />
                        <span>Home</span>
                    </li>
                </Link>
                <Link to='/feed/subscriptions'>
                    <li>
                        <MdSubscriptions size={23} />
                        <span>Subscriptions</span>
                    </li>
                </Link>
                <li>
                    <MdHistory size={23} />
                    <span>History</span>
                </li>
                <li>
                    <MdThumbUp size={23} />
                    <span>Liked videos</span>
                </li>
                <li>
                    <MdLibraryBooks size={23} />
                    <span>Library</span>
                </li>
                <li>
                    <MdSentimentDissatisfied size={23} />
                    <span>Dissatisfied</span>
                </li>
                <li onClick={logOutHandler}>
                    <MdExitToApp size={23} />
                    <span>Logout</span>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar