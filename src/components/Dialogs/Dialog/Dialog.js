import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    const path = props.sex === "Male" ? "https://image.flaticon.com/icons/png/512/4849/4849759.png" : "https://img-premium.flaticon.com/png/512/4849/4849753.png?token=exp=1623587153~hmac=820b636f8ec5c0ee39b2121b076abbe5";

    return (
        <div className={s.dialog}>
            <img className={`avatar ${s.dialog__img}`} src={path}></img>
            <NavLink to={`/dialogs/` + props.id} className={s.dialog__name}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;