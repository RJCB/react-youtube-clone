import React, { useEffect, useState } from 'react';
//bootstrap
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import LoginScreen from './components/loginScreen/LoginScreen';
import SearchScreen from './components/screens/SearchScreen';
import SubscriptionsScreen from './components/screens/subscriptionsScreen/SubscriptionsScreen';
import ChannelScreen from './components/screens/channelScreen/ChannelScreen';


//router
import { Routes, Route, useNavigate } from "react-router-dom";
import './_app.scss';
import { useSelector } from 'react-redux';
import WatchScreen from './components/watchscreen/WatchScreen';

const Layout = ({ children }) => {
    // toggle sidebar state
    const [sidebar, toggleSidebar] = useState(false);
    //handle toggle sidebar click
    const handleToggleSidebar = () => toggleSidebar(value => !value);
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth);
    const history = useNavigate();
    // redirect user to auth page if user is unautenticated
    useEffect(() => {
        if (!loading && !accessToken) {
            history('/auth');
        }
    }, [accessToken, loading, history])


    return (
        <Routes>
            <Route path="/" element={<Layout><HomeScreen /></Layout>} />
            <Route path="/auth" element={<LoginScreen />} />
            <Route path="/search/:query" element={<Layout><SearchScreen /></Layout>} />
            <Route path="/watch/:id" element={<Layout><WatchScreen /></Layout>} />
            <Route path="/feed/subscriptions" element={<Layout><SubscriptionsScreen /></Layout>} />
            <Route path="/channel/:channelId" element={<Layout><ChannelScreen /></Layout>} />
            <Route path="*" element={"No match found"} />
        </Routes>
    )
}

export default App