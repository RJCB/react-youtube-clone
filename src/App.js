import React, { useState } from 'react';
//bootstrap
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import LoginScreen from './components/loginScreen/LoginScreen';

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './_app.scss';

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

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout><HomeScreen /></Layout>} />
            <Route path="/auth" element={<LoginScreen />} />
            <Route path="/search" element={<Layout><h1>Search Results</h1></Layout>} />
            <Route path="*" element={"No match found"} />
        </Routes>
    </BrowserRouter>
    )
}

export default App