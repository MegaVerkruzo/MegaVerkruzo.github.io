import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";
import './../App.css';
import Message from "./Message/Message";
import c from "./Message/Message.module.css";

const Dialogs = () => {
    return (
        <div className={s.messanger}>
            <div>
                <div className={s.DialogsTitle}>
                    DIALOGS:
                </div>
                <Dialog name="Andrey" id="1"/>
                <Dialog name="Alexey" id="2"/>
                <Dialog name="Lena" id="3"/>
                <Dialog name="Darya" id="4"/>
                <Dialog name="Sergey" id="5"/>
                <Dialog name="Airat" id="6"/>
            </div>
            <div className={c.messages}>
                <Message message="Hi, i waant learn ReactJS"/>
                <Message message="Like"/>
                <Message message="Wow, this is cool"/>
                <Message message="3"/>
                <Message message="76"/>
            </div>
        </div>
    );
}

export default Dialogs;