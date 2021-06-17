import React from 'react';
import classes from './Header.module.css';
import Logotype from './../../assets/image/Logotype.png';


const Header = () => {
    return (
        <header className={`${classes.header}` + ' block'}>
            <img src={Logotype}></img>
        </header>
    );
}

export default Header;