import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div>Hello Shuvon</div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Root;