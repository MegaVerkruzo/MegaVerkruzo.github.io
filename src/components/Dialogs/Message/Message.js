import classes from './Message.module.css';
import {I_Or_Another} from "../../some_functions";

const Message = (props) => {

    let who;

    let path = I_Or_Another(props.AmI);

    if (props.AmI) {
        who = classes.I;
    } else {
        who = classes.Someone;
    }

    return (
        <div className={`${classes.posts__items} ${who}`}>
            <img className={`${classes.items__img} ${classes.avatar}`} src={path}></img>
            <div className={classes.items__text}>
                {props.message}
            </div>
        </div>
    );
}

export default Message;