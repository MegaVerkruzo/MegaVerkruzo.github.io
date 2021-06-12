import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${classes.nav}` + ' block'}> {/*block*/}
            <div className={classes.block_text}>
                <a>Profile</a>
            </div>
            <div className={classes.block_text}>
                <a>Messages</a>
            </div>
            <div className={classes.block_text}>
                <a>News</a>
            </div>
            <div className={classes.block_text}>
                <a>Music</a>
            </div>
            <div className={classes.block_text}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;