import './Posts.css';
import './OnePost/OnePost';
import OnePost from "./OnePost/OnePost";


const Posts = () => {
    return (
        <div className="posts block">
            <div className="posts__title title">
                My posts
            </div>
            <div className="form">
                <div className="form__area">
                    <textarea>Write here smth...</textarea>
                </div>
                <div className="form__button button">
                    <button>Send</button>
                </div>
            </div>

            <OnePost />
            <OnePost />


        </div>
    );
}

export default Posts;