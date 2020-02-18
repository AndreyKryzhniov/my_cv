import React from 'react';
import p from './Project.module.css'

function Project(props) {

    let buttons = {
        display: 'block',
        boxSizing: 'border-box',
        width: '80%',
        margin: '15px auto 10px',
        padding: '12px 40px',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '22px',
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        textDecoration: 'none',
        backgroundColor: '#35c4ff',
        border: '2px solid #35c4ff',
        borderRadius: ' 5px',
        cursor: 'pointer'
    }


    return (
        <div className={p.project_wrapper}>
            <div><h3>{props.title}</h3></div>
            <div><p>{props.information}</p></div>
            {props.url &&
                <a style={buttons} href={props.url}>СМОТРЕТЬ ПРОЕКТ</a>
            }
            <a style={buttons} href={props.urlGit}>СМОТРЕТЬ ИСХОДНЫЙ КОД</a>
        </div>
    );
}

export default Project;
