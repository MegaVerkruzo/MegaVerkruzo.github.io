import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import {Girl_Or_Man} from "../../some_functions";

const Dialog = (props) => {

    const path = Girl_Or_Man(props.sex);

    return (
        <div className={s.dialog}>
            <img className={`avatar ${s.dialog__img}`} src={path}></img>
            <NavLink to={`/dialogs/` + props.id} className={s.dialog__name}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;