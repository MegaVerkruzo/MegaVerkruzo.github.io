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

let initialState = {
    contactData: [
        {id: 1, name: "Andrey", sex: "Male"},
        {id: 2, name: "Alexey", sex: "Male"},
        {id: 3, name: "Lena", sex: "Female"},
        {id: 4, name: "Darya", sex: "Female"},
        {id: 5, name: "Sergey", sex: "Male"},
        {id: 6, name: "Airat", sex: "Male"}
    ],
    messageData: [
        {id: 1, message:"Hi, i waant learn ReactJS", AmI: true},
        {id: 2, message:"Like", AmI: false},
        {id: 3, message:"Wow, this is cool", AmI: false},
        {id: 4, message:"3", AmI: true},
        {id: 5, message:"76", AmI: true}
    ],
    newMessage: ''
}

const dialogReducer = (state = initialState, action) => {
    let resultState = {...state};
    switch (action.type) {
        case AddMessageDialogType:
            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessage,
                AmI: true
            };
            resultState.messageData = [...state.messageData];
            resultState.messageData.push(newMessage);
            resultState.newMessage = '';
            return resultState;
        case UpdateMessageDialogType:
            resultState.newMessage = action.message;
            return resultState;
        default:
            return resultState;
    }
}

export default dialogReducer;