import React from 'react'
import './header.scss'
import Adder from '../adder/adder'

const Header = ({themeMode,data,setData,id,setId}) => {


    return (
    <header className='header'>
        <div className="header__main">
            <div className="header__main__logo">
                <h1>
                    TODO
                </h1>
            </div>
            <div className="header__main__theme">
                <button onClick={themeMode.toggleThemeMode}>
                {themeMode.darkMode ?  <i class="fa-regular fa-sun"></i> : <i class="fa-solid fa-moon"></i>}                
                </button>
            </div>
        </div>
        <div className="header__adder adder">
            <Adder id={id} setId={setId} data={ data} setData={setData} />
        </div>
    </header>
    )
}

export default Header