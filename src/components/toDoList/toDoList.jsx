import React, { useState,useEffect } from 'react';
import './toDoList.scss';
import ToDoItem from '../ToDoItem/ToDoItem';
import SortMenu from '../sortMenu/sortmenu';

const ToDoList = ({ data, setData }) => {
const [sorted,setsorted]=useState(data)
    const handleComplateChange = (id) => {
        const target = data.find((item) => item.id === id);
        if (target) {
            target.complate = !target.complate;
            setData([...data]);
            localStorage.setItem('data', JSON.stringify(data));
        }
    };
    useEffect(() => {
        setsorted(data)
    }, [data]);

    return (
        <React.Fragment>
        <div className="toDoList">
            <ul>
            {sorted.map((item) => (
                <ToDoItem 
                    key={item.id}  
                    item={item}
                    handleComplateChange={handleComplateChange}
                />
            ))}</ul>
            <SortMenu sorted={sorted} setData={setData} data={data} setsorted={setsorted}/>
        </div>
        
        </React.Fragment>
    );
};

export default ToDoList;
