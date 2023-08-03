import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screen/home/Home.js';
import { Login } from '../screen/login/Login.js';

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;