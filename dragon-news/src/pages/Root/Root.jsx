import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const Root = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Root;