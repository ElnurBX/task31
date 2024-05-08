import React, { useState, useEffect } from 'react';
import './assets/scss/app.scss';
import './assets/scss/base/grid.scss';
import './assets/scss/base/reset.scss';
import './assets/scss/darkmode/dark.scss';
import './assets/scss/lightmode/light.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ToDoList from './components/toDoList/toDoList';
import './responsivlik.scss'
const App = () => {
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem('data');
        return storedData ? JSON.parse(storedData) : [];
    });
    const [id, setId] = useState(() => {
        const storedId = localStorage.getItem('id');
        return storedId ? JSON.parse(storedId) : 0;
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        localStorage.setItem('id', JSON.stringify(id));
    }, [id]);


    const [darkMode, setDarkMode] = useState(false);
    const toggleThemeMode = () => {
        setDarkMode(!darkMode);
    };

    const themeMode = {
        darkMode,
        setDarkMode,
        toggleThemeMode,
    };

    const appClassName = darkMode ? 'main__app bg-main app-dark' : 'main__app bg-main app-light';

    return (
        <div className={appClassName}>
            <Header themeMode={themeMode} data={data} setData={setData} id={id} setId={setId} />
            <ToDoList data={data} setData={setData} />
            <Footer />
        </div>
    );
};

export default App;
