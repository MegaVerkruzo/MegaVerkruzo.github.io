import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    const path = props.sex === "Male" ? "https://image.flaticon.com/icons/png/512/4849/4849759.png" : "https://image.flaticon.com/icons/png/512/82/82459.png";

    return (
        <div className={s.dialog}>
            <img className={`avatar ${s.dialog__img}`} src={path}></img>
            <NavLink to={`/dialogs/` + props.id} className={s.dialog__name}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;