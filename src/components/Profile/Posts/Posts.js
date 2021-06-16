import s from './Posts.module.css';
import './OnePost/OnePost';
import OnePost from "./OnePost/OnePost";
import React from 'react';
import './../../App.css';
import {AddPostCreateAction, UpdateMessageCreateAction} from "../../../redux/profileReducer";



const Posts = (props) => {

    const postElements = props.postData.map(el => <OnePost id={el.id} message={el.message} likes={el.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(AddPostCreateAction());
    }

    let updateText = () => {
        let text = newPostElement.current.value;

        props.dispatch(UpdateMessageCreateAction(text));
    }

    return (
        <div className="block_up">
            <div className={`${s.posts__title} title`}>
                My posts:
            </div>
            <div className={s.form}>
                <div>
                    <textarea onChange={updateText} className={s.form__area} ref={newPostElement}
                              placeholder="Write something>:3" value={props.message}></textarea>
                </div>
                <div className={`${s.form__button} button`} onClick={addPost}>
                    <div>Send</div>
                </div>
            </div>
            <div class={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default Posts;