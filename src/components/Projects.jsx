import React, { useState, useEffect } from "react";
import ProjectData from '../ProjectData';
import { ProjectCard } from "./ProjectCard.jsx";

export default function Projects() {

    const portfolioList = ProjectData.map((item) => (
        <ProjectCard
            key={item.id}
            project={item}
        />
    ))

    return (
        <>
        
                <div className='col content-center items-center w-100'>
                    {portfolioList}
                </div>
     
        </>
    );
}