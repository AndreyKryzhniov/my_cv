import React from 'react';
import i from '../style/Container.module.css';
import skl from './Skills.module.css'

function Skills() {


  return (
    <div className={i.container}>
        <div className={skl.container_skills}>
            <div className={skl.title}>
                <h2>Ключивые навыки</h2>
            </div>
            <div className={skl.information}>
                <div className={skl.hard_soft}>
                    <h3>HARD SKILLS</h3>
                    <lo>
                        <li><b>HTML</b>(адаптивная верстка)</li>
                        <li><b>CSS</b></li>
                        <li><b>JavaScript</b></li>
                        <li><b>React + Redux</b></li>
                        <li><b>TypeScript</b></li>
                        <li>Контроль версий, <b>Git</b></li>
                    </lo>
                </div>
                <div className={skl.hard_soft}>
                    <h3>SOFT SKILLS</h3>
                    <lo>
                        <li>Хорошие коммуникативные навыки</li>
                        <li>Аналитический склад ума, быстрая обучаемость, желание разиваться</li>
                        <li>Ответственный, целеустремленный и трудолюбивый</li>
                    </lo>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
