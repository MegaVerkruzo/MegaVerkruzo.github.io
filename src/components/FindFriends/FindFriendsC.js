import React from 'react';
import axios from 'axios';
import classes from "./FindFriends.module.css";

class FindFriendsC extends React.Component {
    constructor(props) {
        super(props);
    }



    Show_More = array => {
        this.props.Show_More(array);
    }

    Hide_Users = () => {
        this.props.Hide_Users();
    }

    render() {
        return (
            <div className={classes.block}>
                <div className={`${classes.block__title} title`}>
                    Users:
                </div>
                <div className={classes.block__list}>
                    {People}
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
    };
}

export default FindFriendsC;