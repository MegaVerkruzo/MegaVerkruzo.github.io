import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Navbar.module.css';
import classes from './Panel.module.css';

const Panel = (props) => {
    return (
        <div className={classes.panel__text}>
            <NavLink className={classes.panel__only_text} to={props.to} activeClassName={classes.active}>{`${props.text}`}</NavLink>
        </div>
    );
}

export default Panel;