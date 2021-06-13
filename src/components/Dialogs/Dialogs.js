import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";
import './../App.css';
import Message from "./Message/Message";
import c from "./Message/Message.module.css";

const Dialogs = (props) => {



    const contactElements = props.contactData.map(el => <Dialog name={el.name} id={el.id}/>);
    const messageElements = props.messageData.map(el => <Message message={el.message}/>);

    return (
        <div className={s.messanger}>
            <div>
                <div className={s.DialogsTitle}>
                    DIALOGS:
                </div>
                { contactElements }
            </div>
            <div className={c.messages}>
                { messageElements }
            </div>
        </div>
    );
}

export default Dialogs;