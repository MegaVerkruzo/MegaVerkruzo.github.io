import React from 'react';
import classes from './FindFriends.module.css';
import './../App.css';
import Human from "./Human/Human";
import axios from "axios";

class FindFriends extends React.Component {

    Show_More = () => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.Show_More(response.data.items);
            });
    };

    Hide_Users = () => {
        this.props.Hide_Users();
    };



    render() {
        return (
            <div className={classes.block}>
                <div className={`${classes.block__title} title`}>
                    Users:
                </div>
                <div className={classes.block__list}>
                    { this.props.findFriendsPage.showPeople.map(el => <Human Change_Flag={this.props.Change_Flag}
                                                                        id={el.id} name={el.name}
                                                                        followed={el.followed}/>) }
                </div>
                <div className={classes.block__lowerPage}>
                    <div className={classes.block__buttonPage}>
                        <div onClick={this.Show_More} className={`${classes.block__page_button} button`}>
                            Show more
                        </div>
                        <div onClick={this.Hide_Users} className={`${classes.block__page_button} button`}>
                            Hide users
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default FindFriends;