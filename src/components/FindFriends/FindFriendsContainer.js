import React from 'react';
import {connect} from 'react-redux';
import FindFriends from "./FindFriendsC";
import {ChangeRelationShipCreateAction, HidePeopleAC, ShowPeopleCreateAction} from "../../redux/findFriendsReducer";

let mapStateToProps = state => {
    return {
        findFriendsPage: state.findFriendsPage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        Show_More: array => {
            dispatch(ShowPeopleCreateAction(array));
        },
        Change_Flag: id => {
            dispatch(ChangeRelationShipCreateAction(id));
        },
        Hide_Users: () => {
            dispatch(HidePeopleAC());
        }
    }
}

const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends);

export default FindFriendsContainer;