import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Fetching from "../common/Fetching/Fetching";


const ProfilePresentation = (props) => {
    return (
        <div>

            <ProfileInfo profile={props.profile} isFetching={props.isFetching}/>
            <PostsContainer/>
        </div>
    );
}

export default ProfilePresentation;