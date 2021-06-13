import React from 'react';
import classes from './Navbar.module.css';
import Panel from "./Panel/Panel";
import BestFriend from "./BestFriend/BestFriend";
import './../App.css';

const Navbar = (props) => {

    const menu = props.state.NavBarItems.map((el) => <Panel to={el.to} text={el.text}/>)
    const bestFriends = props.state.bestFriends.map(el => <BestFriend id={el.id} sex={el.sex} name={el.name}/>);


    return (
        <div>
            <nav className={`${classes.nav}` + ' block'}>
                { menu }
            </nav>
            <div className={`${classes.friends}` + ' block'}>
                <div className={`${classes.title} title`}>
                    BestFriends:
                </div>
                { bestFriends }
            </div>
        </div>
    );
}

export default Navbar;