const AddMessageDialogType = 'ADD-MESSAGE-DIALOG';
const UpdateMessageDialogType = 'UPDATE-MESSAGE-DIALOG';
const AddPostType = 'ADD-POST';
const UpdateMessageType = 'UPDATE-MESSAGE';

let store = {
    _state: {
        dialogPage: {
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
        },
        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are you", likes: 43},
                {id: 2, message: "I am fine, thank you", likes: 4},
            ],
            message: ''

        },
        NavBarPage: {
            NavBarItems: [
                {
                    to: '/profile',
                    text: 'Profile'
                },
                {
                    to: '/dialogs',
                    text: 'Messages'
                },
                {
                    to: '/news',
                    text: 'News'
                },
                {
                    to: '/music',
                    text: 'Music'
                },
                {
                    to: '/settings',
                    text: 'Settings'
                },
            ],
            bestFriends: [
                {id: 3, name: "Lena", sex: "Female"},
                {id: 5, name: "Sergey", sex: "Male"},
                {id: 6, name: "Airat", sex: "Male"}
            ]
        }
    },
    _callSubscriber() {
        console.log('Some changed');
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === AddPostType) {
            let newPost = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.message,
                likes: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.message = '';
            this._callSubscriber(this._state);
        } else if (action.type === UpdateMessageType) {
            this._state.profilePage.message = action.message;
            this._callSubscriber(this._state);
        } else if (action.type === AddMessageDialogType) {
            let newMessage = {
                id: this._state.dialogPage.messageData.length + 1,
                message: this._state.dialogPage.newMessage,
                AmI: true
            };
            this._state.dialogPage.messageData.push(newMessage);
            this._state.dialogPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === UpdateMessageDialogType) {
            this._state.dialogPage.newMessage = action.message;
            this._callSubscriber(this._state);
        }
    }
}

export const AddMessageDialogCreateAction = () => {
    return {type: AddMessageDialogType};
}

export const UpdateMessageDialogCreateAction = text => {
    return {
        type: UpdateMessageDialogType, message: text
    }
}

export const AddPostCreateAction = () => {
    return {
        type: AddPostType
    }
}

export const UpdateMessageCreateAction = text => {
    return {
        type: UpdateMessageType,
        message: text
    }
}

export default store;