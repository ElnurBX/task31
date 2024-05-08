import React from 'react';
import './ToDoItem.scss';

const ToDoItem = ({ item, index, handleComplateChange }) => {
    const complate = item.complate;
    const btnClass = complate ? 'TodoComplate bg-complate' : 'TodoComplate';
    const spanClass = complate ? 'Todospan complate__span' : 'Todospan';
    return (
        <div className='ToDoItem bg-content bb-content'>
            <button
                className={btnClass}
                type='button'
                onClick={() => handleComplateChange(item.id)} 
            >
                {complate ? <i className="fa-solid fa-check"></i> : ''}
            </button>
            <span className={spanClass}>{item.content}</span>
        </div>
    );
};

export default ToDoItem;
