import React from 'react';
import classes from './FindFriends.module.css';
import './../App.css';
import Human from "./Human/Human";

const FindFriends = (props) => {

    let People = props.findFriendsPage.showPeople.map(el => <Human Change_Flag={props.Change_Flag} sex={el.sex} id={el.id} name={el.name} surname={el.surname} city={el.city} country={el.country} friend={el.friend} description={el.description}/>)

    let Show_More = () => {
        props.Show_More();
    };

    return (
        <div className={classes.block}>
            <div className={`${classes.block__title} title`}>
                Users:
            </div>
            <div className={classes.block__list}>
                { People }
            </div>
            <div onClick={ Show_More } className={`${classes.block__button} button`}>
                Show more
            </div>
        </div>
    );
}

export default FindFriends;