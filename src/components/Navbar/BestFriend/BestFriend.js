import React from 'react';
import './../../App.css';
import s from './BestFriend.module.css';

const BestFriend = (props) => {
    let path;
    if (props.sex === "Male") {
        path = "https://image.flaticon.com/icons/png/512/4849/4849759.png";
    } else {
        path = "https://image.flaticon.com/icons/png/512/82/82459.png";
    }

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