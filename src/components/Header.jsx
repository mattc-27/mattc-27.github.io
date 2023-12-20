import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <header>
            <div className='header-content'>
                <div className='header-logo'>
                    <h1>Projects</h1>
                </div>
                <nav>
                    <Link className='nav-link' to={'/home'}>Home</Link>
                    <Link className='nav-link' to={'https://www.mattcopeland.space'}>Personal site main</Link>
                </nav>
            </div>
        </header>
    )
}


export { Header }