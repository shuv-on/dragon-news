import React, { Children, Component } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';

export const router = createBrowserRouter([
    {
         path: "/",
         Component: Root,
         children: [{
            index: true,
            element:<p>Home</p>,
         },
         {
            path: "/shuvon",
            element:<p>Shuvon</p>
         },
        ],
    }
  
   
]);