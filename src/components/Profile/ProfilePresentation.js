import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


const ProfilePresentation = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
}

export default ProfilePresentation;