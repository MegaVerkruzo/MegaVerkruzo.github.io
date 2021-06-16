import Dialogs from "./Dialogs.js";
import React from 'react';
import {AddMessageDialogCreateAction, UpdateMessageDialogCreateAction} from "../../redux/dialogReducer";



const DialogsContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(AddMessageDialogCreateAction());
    }

    let updateText = text => {
        props.store.dispatch(UpdateMessageDialogCreateAction(text));
    }

    return <Dialogs state={props.store.getState().dialogPage} addMessage={addMessage} updateText={updateText}/>
}

export default DialogsContainer;