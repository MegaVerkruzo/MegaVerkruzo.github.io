import React from 'react';
import {AddPostCreateAction, UpdateMessageCreateAction} from "../../../redux/profileReducer";
import Posts from "./Posts";



const PostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(AddPostCreateAction());
    }

    let updateText = text => {
        props.store.dispatch(UpdateMessageCreateAction(text));
    }

    return <Posts state={props.store.getState().profilePage} addPost={addPost} updateText={updateText}/>
}

export default PostsContainer;