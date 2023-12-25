import React, { useState, useEffect, useRef } from "react";

import Projects from './Projects';


function Home() {


    return (

        <div className='col content-center items-center w-100'>
            {/* <div className=''>

    </div> */}
            <div className='project-list-container'>
                <Projects />
            </div>
        </div>
    );
}


export { Home }