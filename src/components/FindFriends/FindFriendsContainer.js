import React from 'react';
import {connect} from 'react-redux';
import FindFriends from "./FindFriends";
import {ChangeRelationShipCreateAction, ShowPeopleCreateAction} from "../../redux/findFriendsReducer";

let mapStateToProps = state => {
    return {
        findFriendsPage: state.findFriendsPage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        Show_More: () => {
            dispatch(ShowPeopleCreateAction());
        },
        Change_Flag: id => {
            dispatch(ChangeRelationShipCreateAction(id));
        }
    }
}

const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends);

export default FindFriendsContainer;