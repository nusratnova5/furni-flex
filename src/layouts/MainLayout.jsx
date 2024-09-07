import React from 'react';
import Header from '../component/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;