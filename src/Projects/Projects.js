import React from 'react';
import i from '../style/Container.module.css';
import pr from './Projects.module.css'
import skl from "../Skills/Skills.module.css";
import Project from "./Project/Project";

function Projects() {

    let informationSN = () => {
        return (
            <lo>
                <li>авторизация в приложении</li>
                <li>редактирование профиля</li>
                <li>переход по страницам пользователей</li>
                <li>подписка и отписка от пользователей</li>
                <li>добавление постов</li>
            </lo>
        )
    }

    let informationTemplate = () => {
        return (
            <lo>
                <li>страница логонизации с валидацией (с сохранением токена в localStorage и отправкой его при
                    перезагрузки страницы на сервер)
                </li>
                <li>модальные окна</li>
                <li>корзина товаров магазина (добавление/удаление товара в магазин(данные сохраняются на
                    сервере)/корзину)
                </li>
            </lo>
        )
    }

    let informationTodoList = () => {
        return (
            <lo>
                <li>Добавление/удаление списков</li>
                <li>Добавление/удаление задач в списки</li>
                <li>Сортировка отображения выполненных/невыполненных задач</li>
            </lo>
        )
    }

    let informationRandomChat = () => {
        return (
            <lo>
                <li>По нажатию единственной кнопки вас соединяет со случайным пользователем</li>
                <li>Возможность отправки сообщений</li>
                <li>Возможность Log in/Log out</li>
                <li>В данный момент проект в разработке (для тестирования требуется два пользователя)</li>
            </lo>
        )
    }

    return (
        <div className={i.container}>
            <div className={pr.container_projects}>
                <div className={skl.title}>
                    <h2>ПРОЕКТЫ</h2>
                </div>
                <div style={{paddingTop: '20px', width: '100%'}} className={pr.projects}>
                    <Project title={'СОЦИАЛЬНАЯ СЕТЬ'}
                             information={informationSN()}
                             url={'https://andreykryzhniov.github.io/project_social_network_2.0/#/'}
                             urlGit={'https://github.com/AndreyKryzhniov/project_social_network_2.0'}/>
                    <Project title={'РАЗЛИЧНЫЕ ШАБЛОНЫ ДЛЯ ПРОЕКТОВ'}
                             url={'https://andreykryzhniov.github.io/shop_mini/'}
                             urlGit={'https://github.com/AndreyKryzhniov/shop_mini'}
                             information={informationTemplate()}/>
                    <Project title={'TodoList'}
                             urlGit={'https://github.com/AndreyKryzhniov/Todo_list'}
                             information={informationTodoList()}/>
                    <Project title={'Random chat'}
                             url={'https://andreykryzhniov.github.io/random_chat/#/start_page'}
                             urlGit={'https://github.com/AndreyKryzhniov/random_chat'}
                    information={informationRandomChat()}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
