import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.wall} src="http://elitefon.ru/pic/201302/1920x1080/elitefon.ru-32867.jpg"></img>
            </div>
            <div>
                <img className={s.icon} src="https://image.flaticon.com/icons/png/512/4481/4481101.png"></img>
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