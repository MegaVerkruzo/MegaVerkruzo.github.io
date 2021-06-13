import './Posts.css';
import './OnePost/OnePost';
import OnePost from "./OnePost/OnePost";


const Posts = (props) => {

    const postElements = props.postData.map(el => <OnePost message={el.message} likes={el.likes}/>);

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
            { postElements }
        </div>
    );
}

export default Posts;