import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Human from "./Human/Human";

const Navbar = (props) => {

    const menu = props.state.NavBarItems.map((el) => <Human to={el.to} text={el.text}/>)

    return (
        <div>
            <nav className={`${classes.nav}` + ' block'}>
                { menu }
            </nav>
            <nav className={`${classes.friends}` + ' block'}>

            </nav>
        </div>
    );
}

export default Navbar;