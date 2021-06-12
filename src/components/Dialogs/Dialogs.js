import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";
import './../App.css'


const Dialogs = () => {
    return (
        <div className={s.messanger}>
            <div className={s.dialogs}>
                <div className={s.DialogsTitle}>
                    DIALOGS:
                </div>
                <Dialog name="Andrey"/>
                <Dialog name="Alexey"/>
                <Dialog name="Lena"/>
                <Dialog name="Darya"/>
                <Dialog name="Sergey"/>
                <Dialog name="Airat"/>
            </div>
            <div className={s.messages}>
                Fdsfsdf
            </div>
        </div>
    );
}

export default Dialogs;