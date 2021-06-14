import React from 'react';
import './Profile.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className='content'>
            <ProfileInfo />
            <Posts postData={props.state.postData} message={props.state.message} addPost={props.addPost} updateMessage={props.updateMessage}/>
        </div>
    );
}

export default Profile;