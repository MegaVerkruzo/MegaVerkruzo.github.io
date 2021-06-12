import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to='/dialogs/1'>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;