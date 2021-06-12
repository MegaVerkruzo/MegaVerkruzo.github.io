import './Posts.css';
import './OnePost/OnePost';
import OnePost from "./OnePost/OnePost";


const Posts = () => {
    return (
        <div className="posts block_up">
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

            <OnePost message="Hi, how are you"/>
            <OnePost message="I am fine, thank you"/>


        </div>
    );
}

export default Posts;