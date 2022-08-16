import React from "react";
import axios from "axios";

import AddTaskForm from '../Tasks/AddTaskForm'
import './Tasks.scss';
import penSvg from '../../assets/icons/edit.svg';
import Task from "./Task";


const Tasks = ({list, onEditTitle, onAddTask, onRemoveTask, withoutEmpty}) => {

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
                {list.name}
                <img id='penSvg' onClick={editTitle}
                     src={penSvg} alt='Кнопка исправить'/>
            </h2>
            <div className="tasks__items">
                {list['tasks'] && !list['tasks'].length && !withoutEmpty &&
                    <h2>Нет активных задач</h2>} {/*=> Проверяем есть ли вообще лист с задачами*/}
                {list['tasks'] && list['tasks'].map(task =>
                    <Task
                        key={task.id}
                        onRemove={onRemoveTask}
                        {...task}
                        list={list}
                    />) /*пробросили все єлементы task поочередно*/
                }
            </div>
            <AddTaskForm
                list={list}
                onAddTask={onAddTask}/>
        </div>
    )
}

export default Tasks;