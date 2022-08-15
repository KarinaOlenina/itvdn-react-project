import React from "react";
import axios from "axios";

import AddTaskForm from '../Tasks/AddTaskForm'
import './Tasks.scss';
import penSvg from '../../assets/icons/edit.svg';


const Tasks = ({list, onEditTitle, onAddTask, withoutEmpty}) => {

    const editTitle = () => {
        const newTitle = window.prompt('Название списка', list.name);
        if (newTitle) {
            onEditTitle(list.id, newTitle);
            axios
                .patch('http://localhost:3001/lists/' + list.id, {
                    name: newTitle,
                })
                .catch(() => alert('Не удалось обновить название списка'))
        }
    }

    return (
        <div className="tasks">
            <h2 style={{color: list.color.hex}} className='tasks__title'>
                {/*{console.log(list)}*/}
                {list.name}
                <img id='penSvg' onClick={editTitle}
                     src={penSvg} alt='Кнопка исправить'/>
            </h2>
            <div className="tasks__items">
                {list['tasks'] && !list['tasks'].length && !withoutEmpty && <h2>Нет активных задач</h2>} {/*=> Проверяем есть ли вообще лист с задачами*/}
                {
                    list['tasks'] && list['tasks'].map(task =>
                        <div key={task.id} className="tasks__items-row">
                            <div className="checkbox">
                                <input id={`task-${task.id}`} type="checkbox"/> {/*=> Создали уникальный id*/}
                                <label htmlFor={`task-${task.id}`}> {/*=> Передали уникальный id*/}
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#999"
                                              strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                </label>
                            </div>
                            <input defaultValue={task.text}/> {/*=> Передали текст задач*/}
                        </div>)
                }
            </div>
            <AddTaskForm
                list={list}
                onAddTask={onAddTask}/>
        </div>
    )
}

export default Tasks;