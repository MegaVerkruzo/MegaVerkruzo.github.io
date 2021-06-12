import React from 'react';
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={`${classes.header}` + ' block'}>
            <img src='https://image.flaticon.com/icons/png/512/4832/4832045.png'></img>
        </header>
    );
}

export default Header;