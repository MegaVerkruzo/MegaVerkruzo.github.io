import React from 'react';
import {connect} from 'react-redux';
import FindFriends from "./FindFriendsC";
import {
    ChangePageAC,
    ChangeRelationShipCreateAction,
    CountPageAC,
    HidePeopleAC, ISFETCHINGAC,
    ShowPeopleCreateAction
} from "../../redux/findFriendsReducer";

let mapStateToProps = state => {
    return {
        showPeople: state.findFriendsPage.showPeople,
        currentPage: state.findFriendsPage.currentPage,
        pageCount: state.findFriendsPage.pageCount,
        pageSize: state.findFriendsPage.pageSize,
        isFetching: state.findFriendsPage.isFetching
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
        },
        Count_Page: cnt => {
            dispatch(CountPageAC(cnt));
        },
        Change_Page: p => {
            dispatch(ChangePageAC(p));
        },
        Is_Fetching: Loader => {
            dispatch(ISFETCHINGAC(Loader));
        }
    }
}

const FindFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends);

export default FindFriendsContainer;