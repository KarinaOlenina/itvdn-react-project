import React from "react";

import classNames from 'classnames';

import './List.scss'

const List = ({items}) => {

    return (
        <ul className='list'>
            {
                items.map((item, index) =>
                    <li key={index} className={classNames(item.className, {'active': item.active})}>
                        {/* classname не воспринимает булевые значения!*/}
                        <i>
                            {item.icon ? item.icon : <i className={`bangle bangle--${item.color}`}/>}
                        </i>
                        <span>{item.name}</span>
                    </li>
                )
            }

        </ul>
    )
}

export default List;