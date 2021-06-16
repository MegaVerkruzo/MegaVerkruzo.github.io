import React from 'react';
import {AddPostCreateAction, UpdateMessageCreateAction} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let f1 = state => {
    return {
        state: state.profilePage
    }
}

let f2 = dispatch => {
    return {
        addPost: () => {
            dispatch(AddPostCreateAction());
        },
        updateText: text => {
            dispatch(UpdateMessageCreateAction(text));
        }
    }
}

const PostsContainer = connect(f1, f2)(Posts);

export default PostsContainer;