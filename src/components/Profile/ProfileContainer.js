import React from 'react';
import axios from 'axios';
import ProfilePresentation from "./ProfilePresentation";
import {AddProfilePage} from "../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {AddProfilePage})(ProfileContainer);

class ProfileContainer extends React {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <ProfilePresentation {...this.props}/>
        )
    };
}
