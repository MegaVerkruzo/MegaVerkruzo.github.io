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
                <Dialog name="Andrey"/>
                <Dialog name="Alexey"/>
                <Dialog name="Lena"/>
                <Dialog name="Darya"/>
                <Dialog name="Sergey"/>
                <Dialog name="Airat"/>
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