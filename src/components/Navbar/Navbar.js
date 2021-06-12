import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${classes.nav}` + ' block'}> {/*block*/}
            <div className={classes.block_text}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.block_text}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes.block_text}>
                <a href="/news">News</a>
            </div>
            <div className={classes.block_text}>
                <a href="/music">Music</a>
            </div>
            <div className={classes.block_text}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;