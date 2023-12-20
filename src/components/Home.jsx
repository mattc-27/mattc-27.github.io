import React, { useState, useEffect, useRef } from "react";

function Home() {

    return (
        <div
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1543107076-8f86ee268706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAzMzd8MHwxfGFsbHx8fHx8fHx8fDE3MDMwMTc0NDB8&ixlib=rb-4.0.3&q=80&w=1080')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '300px',
            }}
        >
            <div sclassName='col content-center items-center w-100'>
                <div className='wrapper-content '>
                    <div className='wrapper-inner-about'>
                        <h1>Hello world</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { Home }