import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typograohy, Space } from 'antd';

import { Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>

            </div>
            <div className='footer'>

            </div>
        </div>
    );
}

export default App;