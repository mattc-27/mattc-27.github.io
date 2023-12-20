import React from 'react';

import {
    createRoutesFromElements,
    Route,
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import './style.css';

import { Layout } from './components/Layout';
import { Home } from './components/Home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home />
            }
        ]
    }
])


export default function App() {

    return (
        <RouterProvider router={router} />
    );
}