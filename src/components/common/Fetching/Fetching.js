import React from 'react';
import Loader from './../../../assets/image/Loader.gif';
import classes from './Fetching.module.css';

const Fetching = () => {
    return (
        <div className={classes.block}>
            <img src={Loader} className={classes.block__fetch}></img>
        </div>
    );
}

export default Fetching;