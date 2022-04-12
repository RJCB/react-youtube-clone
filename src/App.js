import React, { useState } from 'react';
//bootstrap
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './components/screens/homeScreen/HomeScreen';

import './_app.scss';

function App() {
    // toggle sidebar state
    const [sidebar, toggleSidebar] = useState(false);
    //handle toggle sidebar click
    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container border border-info">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app__main border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App