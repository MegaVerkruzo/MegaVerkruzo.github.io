const AddMessageDialogType = 'ADD-MESSAGE-DIALOG';
const UpdateMessageDialogType = 'UPDATE-MESSAGE-DIALOG';

export const AddMessageDialogCreateAction = () => {
    return {type: AddMessageDialogType};
}
export const UpdateMessageDialogCreateAction = text => {
    return {
        type: UpdateMessageDialogType, message: text
    }
}

const dialogReducer = (state, action) => {
    switch (action.type) {
        case AddMessageDialogType:
            let newMessage = {
                id: state.dialogPage.messageData.length + 1,
                message: state.dialogPage.newMessage,
                AmI: true
            };
            state.dialogPage.messageData.push(newMessage);
            state.dialogPage.newMessage = '';
            return state;
        case UpdateMessageDialogType:
            state.dialogPage.newMessage = action.message;
        default:
            return state;
    }
}

export default dialogReducer;