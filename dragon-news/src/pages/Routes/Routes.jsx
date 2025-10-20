import React, { Children, Component } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import About from '../About/About';
import Career from '../Career/Career';

export const router = createBrowserRouter([
    {
         path: "/",
         Component: Root,
         children: [{
            index: true,
            Component: Home,
         },
         {
            path: "/about",
            Component:About,
         },
         {
            path: "/career",
            Component: Career,
         },
        ],
    }
  
   
]);