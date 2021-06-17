import classes from './OnePost.module.css';
import MyAvatar from './../../../../assets/image/MyAvatar.png';
const OnePost = (props) => {
    return (
        <div className={classes.posts__items}>
            <img className={classes.items__img} src={MyAvatar}></img>
            <div className={classes.items__text}>
                {props.message}
            </div>
            <div className={classes.postsLike}>
                Likes: {props.likes}
            </div>

        </div>
    );
}

export default OnePost;