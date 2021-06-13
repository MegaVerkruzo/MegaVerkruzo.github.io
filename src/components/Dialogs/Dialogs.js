import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";
import './../App.css';
import Message from "./Message/Message";
import c from "./Message/Message.module.css";

const Dialogs = (props) => {

    debugger;

    const contactElements = props.state.contactData.map(el => <Dialog name={el.name} id={el.id} sex={el.sex}/>);
    const messageElements = props.state.messageData.map(el => <Message message={el.message} AmI={el.AmI}/>);

    return (
        <div className={s.messanger}>
            <div className={s.rightline}>
                <div className={s.DialogsTitle}>
                    DIALOGS :
                </div>
                { contactElements }
            </div>
            <div className={s.messages}>
                <div className={`${s.DialogsTitle} ${s.title__chat}`}>
                    CHAT :
                </div>
                { messageElements }
            </div>
        </div>
    );
}

export default Dialogs;