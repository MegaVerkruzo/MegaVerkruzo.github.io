import React from "react";
import s from "./ProfileInfo.module.css";
import Wall_Space from './../../../assets/image/Wall_space.jpg';
import MyAvatar from './../../../assets/image/MyAvatar.png'
const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.wall} src={Wall_Space}></img>
            </div>
            <div>
                <img className={s.icon} src={MyAvatar}></img>
            </div>

            <div className={s.block_text}>
                <b className={s.line}>Full name:</b> Grunskie Alexey
            </div>
            <div className={s.block_text}>
                <b className={s.line}>Date of Birth:</b> 3 April
            </div>
            <div className={s.block_text}>
                <b className={s.line}>City:</b> Naberezhnye Chelny
            </div>
            <div className={s.block_text}>
                <b className={s.line}>Education:</b> Home learning
            </div>
            <div className={s.block_text}>
                <b className={s.line}>Web Site:</b> https://vk.com/verkruzo
            </div>
        </div>
    );
}

export default ProfileInfo;