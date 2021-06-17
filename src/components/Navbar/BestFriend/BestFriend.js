import React from 'react';
import './../../App.css';
import s from './BestFriend.module.css';
import {Girl_Or_Man} from "../../some_functions";

const BestFriend = (props) => {
    let path = Girl_Or_Man(props.sex);

    return (
        <div className={s.block}>
            <div>
                <img className="avatar" src={path}></img>
            </div>
            <div className={s.block__text}>
                {`${props.name}`}
            </div>
        </div>
    );
}

export default BestFriend;