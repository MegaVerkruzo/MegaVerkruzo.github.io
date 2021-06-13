import classes from './Message.module.css';

const Message = (props) => {

    let who;

    let path;

    if (props.AmI) {
        who = classes.I;
        path = "https://image.flaticon.com/icons/png/512/4481/4481101.png";
    } else {
        who = classes.Someone;
        path = "https://image.flaticon.com/icons/png/512/4849/4849759.png"
    }

    return (
        <div className={`${classes.posts__items} ${who}`}>
            <img className={`${classes.items__img} avatar`} src={path}></img>
            <div className={classes.items__text}>
                {props.message}
            </div>
        </div>
    );
}

export default Message;