import React from "react";

import classNames from 'classnames';

import './List.scss'
import '../AddButtunList'
import Badge from "../Badge";
import removeSvg from '../../assets/icons/remove.svg'

const List = ({items, isRemoveble, onClick, onRemove}) => {

    const isRemoveList = (item) => {
        if(window.confirm('Вы действительно хотите удалить список?')) onRemove(item);
    }

    return (
        <ul onClick={onClick} className='list'>
            {
                items.map((item, index) =>
                    <li key={index} className={classNames(item.className, {'active': item.active})}>
                        {/* classname не воспринимает булевые значения!*/}
                        <i>
                            {item.icon ? item.icon :
                                <Badge color={item.color}/>}
                        </i>
                        <span>{item.name}</span>
                        {isRemoveble &&
                            <img
                                className='list__remove-icon'
                                onClick={() => isRemoveList(item)}
                                src={removeSvg}
                                alt='Кнопка удалить задачу'/>}
                        {/* Вставляем иконку если isRemoveble, исрользуя && */}
                    </li>
                )
            }
        </ul>
    )
}

export default List;