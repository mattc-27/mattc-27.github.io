import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import {Home} from './Home';

export function Layout() {
    
    return (
        <div className='main'>
            <Header />
            <Home />
        </div>
    );
}
