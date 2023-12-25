import React from 'react';

export function ProjectCard({ project }) {

    return (
        <div className='project-card'>
            <div className='project-title'>
                <h1>{project.name}</h1>
            </div>
            <div className='project-description'>
                <p>{project.description}</p>
            </div>
            <div className='project-urls'>
                {project.url ?
                    <div className='project-description-url'>
                        <a href={project.url} >Github</a>
                    </div>
                    : null
                }
                {project.liveUrl ?
                    <div className='project-description-url'>
                        <a href={project.liveUrl}>View</a>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}