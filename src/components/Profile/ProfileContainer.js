import React from 'react';
import * as axios from 'axios';
import ProfilePresentation from "./ProfilePresentation";
import {AddProfilePage, Is_Fetching} from "../../redux/profileReducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.Is_Fetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.Is_Fetching(false);
                this.props.AddProfilePage(response.data);
                console.log(response.data);
            });
    }

    render() {
        return (
            <ProfilePresentation {...this.props}/>
        )
    };
}

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

const ProfileContainerConnect = connect(mapStateToProps, {AddProfilePage, Is_Fetching})(ProfileContainer)

export default ProfileContainerConnect;

