import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function Header() {

    return (
        <header>
            <div className='header-content'>
                <div className='header-title'>
                    <h1>Matthew Copeland</h1>
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