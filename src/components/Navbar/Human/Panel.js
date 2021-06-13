import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Navbar.module.css';
import classes from "../Navbar.module.css";

const Panel = (props) => {
    return (
        <div className={classes.block_text}>
            <NavLink to={props.to} activeClassName={classes.active}>{`${props.text}`}</NavLink>
        </div>
    );
}

export default Panel;