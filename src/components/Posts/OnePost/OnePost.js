import classes from './OnePost.module.css';

const OnePost = (props) => {
    return (
        <div className={classes.posts__items}>
            <img className={classes.items__img} src="https://image.flaticon.com/icons/png/512/4481/4481101.png"></img>
            <div className={classes.items__text}>
                {props.message}
            </div>
        </div>
    );
}

export default OnePost;