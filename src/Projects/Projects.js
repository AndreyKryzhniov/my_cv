import React from 'react';
import i from '../style/Container.module.css';
import pr from './Projects.module.css'
import skl from "../Skills/Skills.module.css";
import Project from "./Project/Project";
import info from "../data"

function Projects() {


    const data = info;

    const element = data.map(progect => {
        debugger
        return <Project
            title={progect.title}
            information={progect.information}
            url={progect.url}
            urlGit={progect.urlGit}
        />
    });

    return (
        <div className={i.container}>
            <div className={pr.container_projects}>
                <div className={skl.title}>
                    <h2>ПРОЕКТЫ</h2>
                </div>
                <div style={{paddingTop: '20px', width: '100%'}} className={pr.projects}>
                    {element}
                </div>
            </div>
        </div>
    );
}

export default Projects;
