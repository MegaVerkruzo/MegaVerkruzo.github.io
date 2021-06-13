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

    return (
        <div className={s.messanger}>
            <div>
                <div className={s.DialogsTitle}>
                    DIALOGS:
                </div>
                <Dialog name={contactData[0].name} id={contactData[0].id}/>
                <Dialog name={contactData[1].name} id={contactData[1].id}/>
                <Dialog name={contactData[2].name} id={contactData[2].id}/>
                <Dialog name={contactData[3].name} id={contactData[3].id}/>
                <Dialog name={contactData[4].name} id={contactData[4].id}/>
                <Dialog name={contactData[5].name} id={contactData[5].id}/>
            </div>
            <div className={c.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
            </div>
        </div>
    );
}

export default Dialogs;