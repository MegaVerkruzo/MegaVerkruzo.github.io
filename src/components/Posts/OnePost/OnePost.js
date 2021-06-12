import classes from './OnePost.module.css';

const OnePost = () => {
    return (
        <div className={classes.posts__items}>
            <div className="items__img">1</div>
            <div className="items__text ">Пост</div>
        </div>
    );
}

export default OnePost;