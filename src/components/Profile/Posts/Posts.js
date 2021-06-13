import s from './Posts.module.css';
import './OnePost/OnePost';
import OnePost from "./OnePost/OnePost";
import React from 'react';
import './../../App.css';

const Posts = (props) => {

    const postElements = props.postData.map(el => <OnePost message={el.message} likes={el.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className="block_up">
            <div className={`${s.posts__title} title`}>
                My posts:
            </div>
            <div className={s.form}>
                <div>
                    <textarea className={s.form__area} ref={newPostElement} placeholder="Write something>:3"></textarea>
                </div>
                <div className={`${s.form__button} button`}>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div class={s.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default Posts;