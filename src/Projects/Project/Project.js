import React from 'react';
import p from './Project.module.css'

function Project(props) {

    const information = props.information.map(el => <li>{el}</li>);

    return (
        <div className={p.project_wrapper}>
            <div><h3>{props.title}</h3></div>
            <div><p><ul>{information}</ul></p></div>
            {props.url &&
                <a className={p.buttons}
                   target='_blank'
                   rel='noopener noreferrer'
                   href={props.url}>СМОТРЕТЬ ПРОЕКТ</a>
            }
            <a className={p.buttons}
               target='_blank'
               rel='noopener noreferrer'
               href={props.urlGit}>СМОТРЕТЬ ИСХОДНЫЙ КОД</a>
        </div>
    );
}

export default Project;
