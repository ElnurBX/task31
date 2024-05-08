import React from 'react'
import "./sortmenu.scss"
const SortMenu = ({sorted,setsorted,data ,setData}) => {
    const datafiltiring = (string) => {
        let a = [];
        let b = [];
        
        switch (string) {
            case 'All':
                setsorted([...data]);
                break;
            case 'Active':
                a = data.filter(item => !item.complate);
                setsorted(a);
                break;
            case 'Completed':
                b = data.filter(item => item.complate);
                setsorted(b);
                break;
            default:
                break;
        }
    };
    const clearcomplate = () => {
        const updatedData = data.filter(item => !item.complate);
        setData(updatedData);
        setsorted(updatedData)
    };
    return (
    <React.Fragment>
    <div className='SortMenu bg-content'>
        <div className="SortMenu__counter">
            <span>{data.length}  items left</span>
        </div>
        <ul className='SortMenu__ul bg-content'>
        <button onClick={() => datafiltiring('All')}>All</button>
        <button onClick={() => datafiltiring('Active')}>Active</button>
        <button onClick={() => datafiltiring('Completed')}>Completed</button>

        </ul>
        <button onClick={() => clearcomplate()}>Clear Completed</button>
    </div>
    </React.Fragment>
    )
}

export default SortMenu