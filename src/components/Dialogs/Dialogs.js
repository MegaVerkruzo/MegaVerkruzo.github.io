import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog.js";
import './../App.css';
import Message from "./Message/Message";
import React from 'react';

const Dialogs = (props) => {

    debugger;

    const contactElements = props.state.contactData.map(el => <Dialog name={el.name} id={el.id} sex={el.sex}/>);
    const messageElements = props.state.messageData.map(el => <Message message={el.message} AmI={el.AmI}/>);

    let newMessageText = React.createRef();

    let addMessage = () => {
        let text = newMessageText.current.value;
        alert(text);
    }

    return (
        <div className={s.messanger}>
            <div className={s.rightline}>
                <div className={`title ${s.title__mar}`}>
                    DIALOGS :
                </div>
                { contactElements }
            </div>
            <div className={s.messages}>
                <div className={`title ${s.title__mar}`}>
                    CHAT :
                </div>
                { messageElements }
                <textarea className={s.input} placeholder="Write message>:3" ref={ newMessageText }>Something</textarea>
                <div className={`button ${s.button}`} onClick={ addMessage }>Send</div>
            </div>

        </div>
    );
}

export default Dialogs;