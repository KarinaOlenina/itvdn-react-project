import React, {Fragment, useState} from "react";
import List from "../List";
import './AddButtonList.scss'

const AddListButton = () => {
    // const [] = useState();

    return (
        <Fragment>
            <List items={[
                {
                    className: 'list__add-button',
                    icon: <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>,
                    name: 'Добавить задачу',
                },
            ]}
            />
            <div className='add-list-popup'>

            </div>
        </Fragment>
    )

}

export default AddListButton;