import React from "react";
import s from "./ProfileInfo.module.css";
import Wall_Space from './../../../assets/image/Wall_space.jpg';
import MyAvatar from './../../../assets/image/MyAvatar.png'
import Fetching from "../../common/Fetching/Fetching";

const ProfileInfo = (props) => {

    let path_avatar;
    let fullName;
    let lookingForAJobDescription;
    let vk;

    if (props.profile == null) {
        path_avatar = MyAvatar;
        fullName = '???';
        lookingForAJobDescription = '???';
        vk = '???';
    } else {
        if (props.profile.contacts) {
            if (props.profile.contacts.vk) {
                vk = props.profile.contacts.vk;
            } else {
                vk = '???';
            }
        } else {
            vk = '???';
        }
        if (props.profile.lookingForAJobDescription) {
            lookingForAJobDescription = props.profile.lookingForAJobDescription;
        } else {
            lookingForAJobDescription = '???';
        }
        if (props.profile.fullName) {
            fullName = props.profile.fullName;
        } else {
            fullName = '???';
        }
        if (props.profile.photos.small) {
            path_avatar = props.profile.photos.small;
        } else {
            path_avatar = MyAvatar;
        }
    }


    return (
        <div className={s.content}>
            <div>
                <img className={s.wall} src={Wall_Space}></img>
            </div>
            {props.isFetching ? <Fetching/> : <>
                <div>
                    <img className={s.icon} src={path_avatar}></img>
                </div>

                <div className={s.block_text}>
                    <b className={s.line}>Full name:</b>{fullName}
                </div>
                <div className={s.block_text}>
                    <b className={s.line}>Date of Birth:</b> ???
                </div>
                <div className={s.block_text}>
                    <b className={s.line}>City:</b> ???
                </div>
                <div className={s.block_text}>
                    <b className={s.line}>Education:</b>{lookingForAJobDescription}
                </div>
                <div className={s.block_text}>
                    <b className={s.line}>Web Site:</b>{vk}
                </div>
            </>
            }

        </div>
    );
}

export default ProfileInfo;