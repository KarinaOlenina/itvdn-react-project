import React from "react";

import './Tasks.scss';
import editSvg from '../../assets/icons/edit.svg';
import removeSvg from '../../assets/icons/remove.svg';



const Task = ({id, text, list, onRemove, onEdit}) => {

    return (
        <div key={id} className="tasks__items-row">
            <div className="checkbox">
                <input id={`task-${id}`} type="checkbox"/> {/*=> Создали уникальный id*/}
                <label htmlFor={`task-${id}`}> {/*=> Передали уникальный id*/}
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#999"
                              strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>
            <input readOnly={true} defaultValue={text}/> {/*=> Передали текст задач*/}
            <div className="tasks__items-row-actions">
                {/*                <div>
                    <svg width="11"
                         height="8"
                         viewBox="0 0 11 8"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                            stroke="#bcbcbc"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                </div>*/}
                <div onClick={() => onEdit}>
                    <img src={editSvg} alt="Кнопка редактировать"/>
                </div>
                <div onClick={() => onRemove(list.id, id)}>
                    <img src={removeSvg} alt="Кнопка удалить"/>
                </div>
            </div>
        </div>
    )

}

export default Task;