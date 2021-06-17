import React from 'react';
import classes from './FindFriends.module.css';
import './../App.css';
import Human from "./Human/Human";
import * as axios from "axios";

const FindFriends = (props) => {

    let axios = require('axios');

    let Show_More = () => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.Show_More(response.data.items);
            });
    };

    let Hide_Users = () => {
        props.Hide_Users();
    }

    debugger;

    let people = props.findFriendsPage.showPeople.map(el => <Human Change_Flag={props.Change_Flag}
                                                                   id={el.id} name={el.name}
                                                                   followed={el.followed}/>);

    return (
        <div className={classes.block}>
            <div className={`${classes.block__title} title`}>
                Users:
            </div>
            <div className={classes.block__list}>
                { people }
            </div>
            <div className={classes.block__lowerPage}>
                <div className={classes.block__buttonPage}>
                    <div onClick={Show_More} className={`${classes.block__page_button} button`}>
                        Show more
                    </div>
                    <div onClick={Hide_Users} className={`${classes.block__page_button} button`}>
                        Hide users
                    </div>
                </div>
            </div>


        </div>
    );
}

export default FindFriends;