import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Panel from "./Human/Panel";
import BestFriend from "./BestFriend/BestFriend";
import c from './../Dialogs/Dialogs.module.css';

const Navbar = (props) => {

    const menu = props.state.NavBarItems.map((el) => <Panel to={el.to} text={el.text}/>)
    const bestFriends = props.state.bestFriends.map(el => <BestFriend id={el.id} sex={el.sex} name={el.name}/>);


    return (
        <div>
            <nav className={`${classes.nav}` + ' block'}>
                { menu }
            </nav>
            <div className={`${classes.friends}` + ' block'}>
                <div className={c.DialogsTitle}>
                    BestFriends:
                </div>
                { bestFriends }
            </div>
        </div>
    );
}

export default Navbar;