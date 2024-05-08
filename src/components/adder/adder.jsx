import React, { useState } from 'react';
import './adder.scss';

const Adder = ({data,setData ,id,setId}) => {
    const [newTodo, setNewTodo] = useState({ content: '', complate: false });
    const [complate, setComplate] = useState(false);
    const [content, setContent] = useState('');
    const changeComplate = () => {
        setComplate(!complate);
        setNewTodo({ ...newTodo, complate: !complate });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(content.trim() === ""){
            alert("boş məlumat göndərilə' bilməz")
        }else{
            
        const todo = { content, complate ,id};
        const updatedData = [...data, todo];
        setId(id+=1)
        setData(updatedData);
        localStorage.setItem('data', JSON.stringify(updatedData));
        localStorage.setItem('id', JSON.stringify(id));
        setContent('');
        setComplate(false);
        }
    };
    const btnClass = complate ? 'TodoComplate bg-complate' : 'TodoComplate';
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        placeholder='Create a new todo…' 
                        type="text" 
                        className='bg-content' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button 
                        className={btnClass}
                        type='button' 
                        onClick={changeComplate}
                    >
                        {complate ? <i className="fa-solid fa-check"></i> : ''}
                    </button>
                </div>
            </form>
        </>
    );
};

export default Adder;
