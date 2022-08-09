import React, {useState} from "react";
import List from "../List";
import './AddButtonList.scss'
import Badge from "../Badge";

import closeSvg from '../../assets/icons/close.svg'


const AddListButton = ({colors, onAdd}) => {
    const [state, setState] = useState(false);
    const [stateSelectColor, setStateSelectColor] = useState(colors[0].id); /* => Берем первый id первого элимента*/
    const [inputValue, setInputValue] = useState('');
    const [placeHolder, setPlaceHolder] = useState('Название папки')

    const addTask = () => {
        if (!inputValue) {
            setPlaceHolder('Введите название папки');
            return;
        }
        const color = colors.find(color => color.id === stateSelectColor).name;
        onAdd({
            id: Math.random(),
            name: inputValue,
            color,
        });
        onClose();
    }

    const onClose = () => {
        setInputValue('');
        setState(false);
        setStateSelectColor(colors[0].id)
    }

    return (
        <div className='add-list'>
            <List
                onClick={() => setState(!state)
                }
                items={[
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
            {state && (
                <div className='add-list__popup'>
                    <img onClick={onClose}
                         src={closeSvg}
                         alt='Кнопка закрытия окна'
                         className="add-list__popup-close-btn"/>
                    <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        className='field'
                        type='text'
                        placeholder={placeHolder}/>
                    <div className='add-list__popup-colors'>
                        {
                            colors.map(color =>
                                <Badge onClick={() => setStateSelectColor(color.id)}
                                       key={color.id}
                                       color={color.name}
                                       className={stateSelectColor === color.id && 'active'}
                                />)
                        }
                    </div>
                    <button
                        onClick={addTask}
                        className='button'
                    >Добавить
                    </button>
                </div>
            )}

        </div>
    )
}

export default AddListButton;