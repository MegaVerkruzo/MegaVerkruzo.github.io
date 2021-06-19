import React from 'react';
import {withRouter} from 'react-router-dom';
import * as axios from 'axios';
import ProfilePresentation from "./ProfilePresentation";
import {AddProfilePage, Is_Fetching} from "../../redux/profileReducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.Is_Fetching(true);
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            userId=2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const urlProfileContainer = withRouter(ProfileContainer)

const ProfileContainerConnect = connect(mapStateToProps, {AddProfilePage, Is_Fetching})(urlProfileContainer)

export default ProfileContainerConnect;

