import React from 'react';
import './../../App.css';
import s from './BestFriend.module.css';

const BestFriend = (props) => {
    let path;
    if (props.sex === "Male") {
        path = "https://image.flaticon.com/icons/png/512/4849/4849759.png";
    } else {
        path = "https://img-premium.flaticon.com/png/512/4849/4849753.png?token=exp=1623587153~hmac=820b636f8ec5c0ee39b2121b076abbe5";
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