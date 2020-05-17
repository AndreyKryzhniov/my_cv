import React from 'react';
import i from '../style/Container.module.css';
import avatar from '../img/avatar.jpg'
import inf from './Information.module.css'

function Information() {

    return (
        <div className={i.container}>
            <div className={inf.container_inform}>
                <div><img src={avatar} className={inf.avatarStyle} alt={"avatar"}/></div>
                <div>
                    <div>
                        <h2>КРАТКАЯ ИНФОРМАЦИЯ ОБО МНЕ</h2>
                        <p>Андрей Крыжнёв</p>
                        <p>Возраст: 28 лет</p>
                        <p>БНТУ, инженер</p>
                        <p>Опыт в веб-разработке (фриланс): полгода</p>
                    </div>
                    <div>
                        <h2>КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
                        <p>Телефон: <a
                            className={inf.contact}
                            href="tel:+375295813313"
                            target='_blank'
                            rel='noopener noreferrer'
                            title="+375 29 581 33 13">
                            8 (029) 581-33-13</a>
                        </p>
                        <p>Telegram: <a
                            className={inf.contact}
                            href="https://t.me/KryzhnevAV"
                            target='_blank'
                            rel='noopener noreferrer'
                            title="KryzhnevAV">
                            KryzhnevAV</a>
                        </p>
                        <p>Почта: <a
                            className={inf.contact}
                            target='_blank'
                            rel='noopener noreferrer'
                            href="mailto:andreykryzhniov@gmail.com"
                            title="mail">
                            andreykryzhniov@gmail.com</a>
                        </p>
                        <p>GitHub: <a
                            className={inf.contact}
                            target='_blank'
                            rel='noopener noreferrer'
                            href="https://github.com/AndreyKryzhniov"
                            title="gitHub">
                            github.com/AndreyKryzhniov</a>
                        </p>
                        <p>Linkedin: <a className={inf.contact} target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/andrey-kryzhniov-b8bb51195/" title="linkedin">Andrey Kryzhniov</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
