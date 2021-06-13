import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";
import './../App.css';
import Message from "./Message/Message";
import c from "./Message/Message.module.css";

const Dialogs = () => {

    const contactData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Alexey"},
        {id: 3, name: "Lena"},
        {id: 4, name: "Darya"},
        {id: 5, name: "Sergey"},
        {id: 6, name: "Airat"}
    ]

    const messageData = [
        {id: 1, message:"Hi, i waant learn ReactJS"},
        {id: 2, message:"Like"},
        {id: 3, message:"Wow, this is cool"},
        {id: 4, message:"3"},
        {id: 5, message:"76"}
    ]

    const contactElements = contactData.map(el => <Dialog name={el.name} id={el.id}/>);
    const messageElements = messageData.map(el => <Message message={el.message}/>);

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