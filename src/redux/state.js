import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


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
        this._state = dialogReducer(this._state, action);
        this._state = profileReducer(this._state, action);
        this._state = sidebarReducer(this._state, action);

        this._callSubscriber(this._state);
    }
}

export default store;