import s from './Dialogs.module.css';
import one_post from './../Posts/OnePost/OnePost.module.css'
import Dialog from "./Dialog/Dialog.js";
import './../App.css'
import OnePost from './../Posts/OnePost/OnePost'

const Dialogs = () => {
    return (
        <div className={s.messanger}>
            <div className={s.dialogs}>
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
            <div className={one_post.messages}>
                <OnePost message="Hi, i waant learn ReactJS"/>
                <OnePost message="Like"/>
                <OnePost message="Wow, this is cool"/>
                <OnePost message="3"/>
                <OnePost message="76"/>
            </div>
        </div>
    );
}

export default Dialogs;