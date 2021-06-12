import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";

const Dialogs = () => {
    return (
        <div className={s.messanger}>
            <div className={s.dialogs}>
                <div className={s.DialogsTitle}>
                    DIALOGS:
                </div>
                <Dialog name="Andrey"/>
            </div>
            <div className={s.messages}>
                Fdsfsdf
            </div>
        </div>
    );
}

export default Dialogs;