import Dialogs from "./Dialogs.js";
import React from 'react';
import {AddMessageDialogCreateAction, UpdateMessageDialogCreateAction} from "../../redux/dialogReducer";
import {connect} from 'react-redux';

let f1 = state => {
    return {
        state: state.dialogPage
    }
}
let f2 = dispatch => {
    return {
        addMessage: () => {
            dispatch(AddMessageDialogCreateAction());
        },
        updateText: text => {
            dispatch(UpdateMessageDialogCreateAction(text));
        }
    }
}

const DialogsContainer = connect(f1, f2)(Dialogs);

export default DialogsContainer;