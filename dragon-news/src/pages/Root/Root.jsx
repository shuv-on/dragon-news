import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

const Root = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <NavBar></NavBar>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Root;